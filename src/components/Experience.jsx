import { Calendar, MapPin, TrendingUp, Briefcase } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

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
    <section id="experience" className="section-padding bg-devops-gray/30 relative">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-devops-green mx-auto relative">
              <div className="absolute inset-0 bg-devops-green blur-lg opacity-50"></div>
            </div>
          </div>
        </ScrollReveal>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <ScrollReveal key={idx} delay={idx * 100} direction="up">
              <div className="group glass-effect rounded-lg p-8 hover:border-devops-green transition-all duration-300 transform hover:scale-[1.01] relative overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-devops-green/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Briefcase className="text-devops-green group-hover:text-emerald-400 transition-colors" size={24} />
                        <h3 className="text-2xl font-bold text-gray-100 group-hover:text-devops-green transition-colors">
                          {exp.role}
                        </h3>
                      </div>
                      <div className="flex items-center text-devops-green mb-3 group-hover:text-emerald-400 transition-colors">
                        <span className="font-semibold text-lg">{exp.company}</span>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                        <div className="flex items-center group/item hover:text-devops-green transition-colors">
                          <Calendar size={16} className="mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center group/item hover:text-devops-green transition-colors">
                          <MapPin size={16} className="mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 mt-6">
                    {exp.achievements.map((achievement, aIdx) => (
                      <ScrollReveal key={aIdx} delay={aIdx * 100} direction="left">
                        <div className="group/item border-l-2 border-devops-green hover:border-emerald-400 pl-4 transition-all duration-300 relative">
                          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-devops-green group-hover/item:w-1 transition-all duration-300"></div>
                          <div className="flex items-start">
                            <div className="p-1.5 bg-devops-green/20 rounded group-hover/item:bg-devops-green/30 transition-colors">
                              <TrendingUp className="text-devops-green group-hover/item:text-emerald-400 transition-colors" size={20} />
                            </div>
                            <div className="ml-3 flex-1">
                              <h4 className="font-semibold text-gray-200 mb-1 group-hover/item:text-devops-green transition-colors">
                                {achievement.title}
                              </h4>
                              <p className="text-gray-400 leading-relaxed group-hover/item:text-gray-300 transition-colors">
                                {achievement.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </ScrollReveal>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

