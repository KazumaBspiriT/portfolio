import { ExternalLink, Github, Cloud, Network, Sparkles } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const Projects = () => {
  const projects = [
    {
      title: 'VXLAN to IPVLAN Migration',
      description: 'Migrated 100+ network devices from VXLAN to IPVLAN, improving network efficiency by 20%. Automated configuration updates with Ansible playbooks, reducing manual effort and errors by 40%.',
      technologies: ['Networking', 'Linux', 'F5 BIG-IP', 'Ansible'],
      icon: Network,
      highlights: [
        '20% network efficiency improvement',
        '40% reduction in manual effort',
        '100+ devices migrated',
      ],
    },
    {
      title: 'Multi-Cloud Deployment Automation',
      description: 'Developed a comprehensive automation framework using Terraform & Ansible to provision and deploy applications across AWS, Azure, and GCP. Implemented CI/CD with GitHub Actions for infrastructure provisioning, containerized workloads, and multi-cloud deployments.',
      technologies: ['Terraform', 'Ansible', 'Docker', 'Kubernetes', 'GitHub Actions', 'AWS', 'Azure', 'GCP'],
      icon: Cloud,
      highlights: [
        '50% faster deployments achieved',
        'Multi-cloud infrastructure (AWS, Azure, GCP)',
        'Full CI/CD pipeline with GitHub Actions',
        'Supports Kubernetes, Container, and Static deployments',
      ],
      status: 'Completed',
      githubUrl: 'https://github.com/KazumaBspiriT/multicloudproject',
    },
  ]

  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-devops-green mx-auto relative">
              <div className="absolute inset-0 bg-devops-green blur-lg opacity-50"></div>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => {
            const Icon = project.icon
            return (
              <ScrollReveal key={idx} delay={idx * 150} direction="up">
                <div
                  className="group glass-effect rounded-lg p-8 hover:border-devops-green transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-2 relative overflow-hidden"
                >
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-devops-green/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className="relative">
                        <div className="p-3 bg-devops-green/20 rounded-lg group-hover:bg-devops-green/30 transition-all duration-300 group-hover:scale-110">
                          <Icon className="text-devops-green group-hover:text-emerald-400 transition-colors" size={28} />
                        </div>
                        <Sparkles className="absolute -top-1 -right-1 text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" size={16} />
                      </div>
                      <div className="flex items-center gap-2">
                        {project.status && (
                          <span className={`px-3 py-1 text-xs font-mono rounded-full ${
                            project.status === 'Completed' 
                              ? 'bg-devops-green/20 text-devops-green' 
                              : 'bg-emerald-500/20 text-emerald-400 animate-pulse'
                          }`}>
                            {project.status}
                          </span>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 glass-effect border border-devops-light hover:border-devops-green rounded-lg text-gray-400 hover:text-devops-green transition-all duration-300 transform hover:scale-110 group/link"
                            aria-label="View on GitHub"
                          >
                            <Github size={20} className="group-hover/link:text-emerald-400 transition-colors" />
                          </a>
                        )}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-100 mb-3 group-hover:text-devops-green transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors">
                      {project.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Highlights:</h4>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, hIdx) => (
                          <li 
                            key={hIdx} 
                            className="flex items-start text-sm text-gray-400 group/item hover:text-gray-300 transition-colors"
                            style={{
                              animationDelay: `${hIdx * 0.1}s`
                            }}
                          >
                            <span className="text-devops-green mr-2 group-hover/item:text-emerald-400 transition-colors">▸</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="group/tech px-3 py-1 bg-devops-light/50 hover:bg-devops-green/20 text-gray-300 hover:text-devops-green text-xs font-mono rounded-full transition-all duration-300 transform hover:scale-105 cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects

