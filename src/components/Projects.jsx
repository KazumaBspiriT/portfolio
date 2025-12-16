import { ExternalLink, Github, Cloud, Network, Server, Play, Circle, Box } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const Projects = () => {
  const projects = [
    {
      id: 'svc-01-vxlan',
      name: 'vxlan-migration-service',
      type: 'Network Migration',
      status: 'completed',
      uptime: '100%',
      region: 'on-prem',
      description: 'Migrated 100+ network devices from VXLAN to IPVLAN, improving network efficiency by 20%. Automated with Ansible.',
      tech: ['Ansible', 'F5 BIG-IP', 'Linux'],
      github: null,
      stats: { efficiency: '+20%', devices: 105 }
    },
    {
      id: 'svc-02-multicloud',
      name: 'multicloud-deploy-bot',
      type: 'Infrastructure Automation',
      status: 'active',
      uptime: '99.99%',
      region: 'global-edge',
      description: 'Terraform & Ansible automation framework for AWS, Azure, and GCP. Full CI/CD with Github Actions.',
      tech: ['Terraform', 'K8s', 'Docker', 'AWS/GCP'],
      github: 'https://github.com/KazumaBspiriT/multicloudproject',
      stats: { speed: '+50%', clouds: 3 }
    },
  ]

  return (
    <section id="projects" className="section-padding bg-console-bg relative border-t border-console-header">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-8 border-b border-console-header pb-4">
            <h2 className="text-2xl font-mono font-bold text-console-text">
              <span className="text-console-green">./</span>active_deployments
            </h2>
            <span className="px-2 py-0.5 rounded textxs bg-console-header text-console-text">2 active</span>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <ScrollReveal key={project.id} delay={idx * 150} direction="up">
              <div className="bg-console-bg border border-console-header rounded p-4 font-mono hover:border-console-green transition-colors group relative overflow-hidden">
                {/* Status Bar */}
                <div className="flex justify-between items-center mb-4 text-xs border-b border-console-header pb-2">
                  <div className="flex items-center gap-2">
                    <Box size={14} className="text-console-blue" />
                    <span className="text-console-text/70">{project.id}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${project.status === 'active' ? 'bg-console-green animate-pulse' : 'bg-console-text/50'}`}></span>
                    <span className="uppercase text-console-text/70">{project.status}</span>
                  </div>
                </div>

                {/* Main Content */}
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-console-green mb-1 group-hover:underline decoration-console-green/30 underline-offset-4">
                    {project.name}
                  </h3>
                  <p className="text-xs text-console-text/50 mb-3">{project.type}</p>
                  <p className="text-sm text-console-text mb-4 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-2 mb-4 bg-console-header/30 p-2 rounded">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key} className="flex justify-between text-xs">
                      <span className="text-console-text/60">{key}:</span>
                      <span className="text-console-yellow">{value}</span>
                    </div>
                  ))}
                  <div className="flex justify-between text-xs">
                    <span className="text-console-text/60">region:</span>
                    <span className="text-console-blue">{project.region}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-console-text/60">uptime:</span>
                    <span className="text-console-green">{project.uptime}</span>
                  </div>
                </div>

                {/* Footer / Actions */}
                <div className="flex items-center justify-between mt-auto pt-2 border-t border-console-header/50">
                  <div className="flex gap-2">
                    {project.tech.map(t => (
                      <span key={t} className="text-[10px] px-1.5 py-0.5 border border-console-text/20 rounded text-console-text/70">
                        {t}
                      </span>
                    ))}
                  </div>

                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-console-text hover:text-console-green transition-colors">
                      <Github size={16} />
                    </a>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

