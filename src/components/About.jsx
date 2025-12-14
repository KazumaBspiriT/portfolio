import { Code2, Cloud, Zap } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-devops-green mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate DevOps Engineer with expertise in cloud infrastructure, 
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

          <div className="grid grid-cols-3 gap-6">
            <div className="glass-effect p-6 rounded-lg text-center hover:border-devops-green transition-all duration-200">
              <Code2 className="text-devops-green mx-auto mb-3" size={32} />
              <h3 className="font-semibold text-gray-200 mb-2">Automation</h3>
              <p className="text-sm text-gray-400">Infrastructure as Code</p>
            </div>
            <div className="glass-effect p-6 rounded-lg text-center hover:border-devops-green transition-all duration-200">
              <Cloud className="text-devops-green mx-auto mb-3" size={32} />
              <h3 className="font-semibold text-gray-200 mb-2">Cloud</h3>
              <p className="text-sm text-gray-400">Multi-Cloud Solutions</p>
            </div>
            <div className="glass-effect p-6 rounded-lg text-center hover:border-devops-green transition-all duration-200">
              <Zap className="text-devops-green mx-auto mb-3" size={32} />
              <h3 className="font-semibold text-gray-200 mb-2">Performance</h3>
              <p className="text-sm text-gray-400">Optimization & Scaling</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

