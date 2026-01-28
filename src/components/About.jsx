import { Code2, Cloud, Zap } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const About = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">About Me</span>
            </h2>
            <div className="w-24 h-1 bg-devops-green mx-auto relative">
              <div className="absolute inset-0 bg-devops-green blur-lg opacity-50"></div>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left" delay={100}>
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionatee DevOps Engineer with expertise in cloud infrastructure,
                containerization, and automation. Currently pursuing my Master's in Information
                Technology at the University of Cincinnati, I bring hands-on experience from
                Motorola Solutions where I managed large-scale infrastructure deployments.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I specialize in building resilient, scalable systems using Kubernetes, Terraform,
                and Ansible. My focus is on automating workflows, optimizing infrastructure, and
                implementing best practices for cloud-native applications.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={200}>
            <div className="grid grid-cols-3 gap-6">
              <div className="group glass-effect p-6 rounded-lg text-center hover:border-devops-green transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-devops-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Code2 className="text-devops-green mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 relative z-10" size={32} />
                <h3 className="font-semibold text-gray-200 mb-2 relative z-10">Automation</h3>
                <p className="text-sm text-gray-400 relative z-10">Infrastructure as Code</p>
              </div>
              <div className="group glass-effect p-6 rounded-lg text-center hover:border-devops-green transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-devops-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Cloud className="text-devops-green mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 relative z-10" size={32} />
                <h3 className="font-semibold text-gray-200 mb-2 relative z-10">Cloud</h3>
                <p className="text-sm text-gray-400 relative z-10">Multi-Cloud Solutions</p>
              </div>
              <div className="group glass-effect p-6 rounded-lg text-center hover:border-devops-green transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-devops-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Zap className="text-devops-green mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 relative z-10" size={32} />
                <h3 className="font-semibold text-gray-200 mb-2 relative z-10">Performance</h3>
                <p className="text-sm text-gray-400 relative z-10">Optimization & Scaling</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

export default About

