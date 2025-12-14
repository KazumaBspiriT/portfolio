import { Code, Cloud, Settings, Network } from 'lucide-react'

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

  return (
    <section id="skills" className="section-padding bg-devops-gray/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Technical Skills</span>
          </h2>
          <div className="w-24 h-1 bg-devops-green mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon
            return (
              <div
                key={idx}
                className="glass-effect rounded-lg p-6 hover:border-devops-green transition-all duration-200"
              >
                <div className="flex items-center mb-4">
                  <Icon className="text-devops-green mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-gray-100">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="text-gray-400 text-sm flex items-center">
                      <span className="text-devops-green mr-2">▹</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        <div className="mt-12 glass-effect rounded-lg p-8">
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
                className="px-4 py-2 bg-devops-light/50 text-gray-300 text-sm rounded-lg font-mono"
              >
                {concept}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills

