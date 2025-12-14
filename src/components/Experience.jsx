import { Calendar, MapPin, TrendingUp } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      company: 'Motorola Solutions',
      role: 'Software Engineer',
      location: 'Bangalore, Karnataka',
      period: 'Sep 2022 - Aug 2024',
      achievements: [
        {
          title: 'F5 Azure Load Balancing',
          description: 'Managed and deployed 5+ F5 load balancers, including successful deployments in Azure; configured Azure Load Balancer and Application Gateway to handle 10,000+ concurrent connections with 99% reliability.',
        },
        {
          title: 'RabbitMQ Administration',
          description: 'Administered RabbitMQ for 50+ distributed applications, optimized communication by converting 40 classic queues to quorum queues, reducing message delivery times by 30%.',
        },
        {
          title: 'Automation Scripting',
          description: 'Developed 20+ Ansible playbooks for F5 and RabbitMQ automation, along with Bash, Python, and Perl scripts, cutting manual operations by 40% and saving 15+ hours per week.',
        },
        {
          title: 'Networking Containerization',
          description: 'Contributed to network protocol migrations (VXLAN → IPVLAN) impacting 100+ devices with 20% efficiency gains, while leveraging Docker and Podman for faster, scalable deployments.',
        },
      ],
    },
  ]

  return (
    <section id="experience" className="section-padding bg-devops-gray/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-devops-green mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="glass-effect rounded-lg p-8 hover:border-devops-green transition-all duration-200">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-100 mb-2">{exp.role}</h3>
                  <div className="flex items-center text-devops-green mb-2">
                    <span className="font-semibold">{exp.company}</span>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      {exp.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-1" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mt-6">
                {exp.achievements.map((achievement, aIdx) => (
                  <div key={aIdx} className="border-l-2 border-devops-green pl-4">
                    <div className="flex items-start">
                      <TrendingUp className="text-devops-green mr-3 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <h4 className="font-semibold text-gray-200 mb-1">{achievement.title}</h4>
                        <p className="text-gray-400 leading-relaxed">{achievement.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

