import { ExternalLink, Github, Cloud, Network } from 'lucide-react'

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
      description: 'Developing an automation framework using Terraform & Ansible to provision and deploy apps across AWS, Azure, and GCP. Implementing CI/CD with GitLab pipelines for infrastructure provisioning and containerized workloads.',
      technologies: ['Terraform', 'Ansible', 'Docker', 'Kubernetes', 'GitLab CI/CD', 'AWS', 'Azure', 'GCP'],
      icon: Cloud,
      highlights: [
        '50% faster deployments target',
        'Multi-cloud infrastructure',
        'Full CI/CD pipeline',
      ],
      status: 'In Progress',
    },
  ]

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-devops-green mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => {
            const Icon = project.icon
            return (
              <div
                key={idx}
                className="glass-effect rounded-lg p-8 hover:border-devops-green transition-all duration-200 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-devops-green/20 rounded-lg group-hover:bg-devops-green/30 transition-colors">
                    <Icon className="text-devops-green" size={28} />
                  </div>
                  {project.status && (
                    <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-mono rounded-full">
                      {project.status}
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-bold text-gray-100 mb-3">{project.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-6">{project.description}</p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Highlights:</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start text-sm text-gray-400">
                        <span className="text-devops-green mr-2">▸</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 bg-devops-light/50 text-gray-300 text-xs font-mono rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects

