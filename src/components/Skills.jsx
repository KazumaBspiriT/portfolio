import { Code, Cloud, Settings, Network } from 'lucide-react'
import ScrollReveal from './ScrollReveal'
import { useState, useEffect } from 'react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code,
      skills: ['Go', 'Perl', 'Bash', 'Python', 'JavaScript', 'YAML'],
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      skills: ['AWS', 'Azure', 'Docker', 'Podman', 'Kubernetes', 'Ansible', 'Terraform', 'GitHub Actions', 'GitLab CI/CD'],
    },
    {
      title: 'Infrastructure',
      icon: Settings,
      skills: ['F5 BIG-IP (LTM, GTM, ASM)', 'Azure Load Balancer', 'NGINX Ingress', 'RabbitMQ', 'Consul', 'Vault', 'RHEL8', 'Linux'],
    },
    {
      title: 'Networking & Tools',
      icon: Network,
      skills: ['Wireshark', 'TCP Dump', 'Cisco Packet Tracer', 'Vim', 'VS Code', 'Git', 'Azure Repos'],
    },
  ]

  const [visibleSkills, setVisibleSkills] = useState({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillId = entry.target.dataset.skillId
            setVisibleSkills((prev) => ({ ...prev, [skillId]: true }))
          }
        })
      },
      { threshold: 0.1 }
    )

    skillCategories.forEach((_, idx) => {
      const element = document.querySelector(`[data-skill-id="${idx}"]`)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="section-padding bg-devops-gray/30 relative">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Technical Skills</span>
            </h2>
            <div className="w-24 h-1 bg-devops-green mx-auto relative">
              <div className="absolute inset-0 bg-devops-green blur-lg opacity-50"></div>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon
            return (
              <ScrollReveal key={idx} delay={idx * 100} direction="up">
                <div
                  data-skill-id={idx}
                  className="group glass-effect rounded-lg p-6 hover:border-devops-green transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-devops-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="flex items-center mb-4 relative z-10">
                    <Icon className="text-devops-green mr-3 group-hover:scale-110 transition-transform duration-300" size={24} />
                    <h3 className="text-xl font-semibold text-gray-100">{category.title}</h3>
                  </div>
                  <ul className="space-y-2 relative z-10">
                    {category.skills.map((skill, sIdx) => (
                      <li 
                        key={sIdx} 
                        className="text-gray-400 text-sm flex items-center group/item"
                        style={{
                          opacity: visibleSkills[idx] ? 1 : 0,
                          transform: visibleSkills[idx] ? 'translateX(0)' : 'translateX(-20px)',
                          transition: `all 0.3s ease ${sIdx * 0.05}s`
                        }}
                      >
                        <span className="text-devops-green mr-2 group-hover/item:text-emerald-400 transition-colors">▹</span>
                        <span className="group-hover/item:text-gray-300 transition-colors">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        <ScrollReveal delay={400}>
          <div className="mt-12 glass-effect rounded-lg p-8 hover:border-devops-green transition-all duration-300">
            <h3 className="text-2xl font-semibold text-gray-100 mb-6">Core Concepts</h3>
            <div className="flex flex-wrap gap-3">
              {[
                'Cloud Computing',
                'Infrastructure as Code (IaC)',
                'Containerization',
                'Microservices Architecture',
                'Service Networking',
                'Load Balancing',
                'CI/CD Pipelines',
                'Configuration Management',
                'Identity & Access Management (IAM)',
                'Network Protocols',
                'Monitoring & Logging',
                'Agile Methodology',
                'DevSecOps',
              ].map((concept, idx) => (
                <span
                  key={idx}
                  className="group px-4 py-2 bg-devops-light/50 hover:bg-devops-green/20 text-gray-300 hover:text-devops-green text-sm rounded-lg font-mono transition-all duration-300 transform hover:scale-105 cursor-default"
                >
                  {concept}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default Skills

