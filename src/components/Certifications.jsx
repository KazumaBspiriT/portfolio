import { Award, Sparkles } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const Certifications = () => {
  const certifications = [
    {
      name: 'Certified Kubernetes Administrator (CKA)',
      issuer: 'Cloud Native Computing Foundation',
      icon: '☸️',
    },
    {
      name: 'Certified Kubernetes Application Developer (CKAD)',
      issuer: 'Cloud Native Computing Foundation',
      icon: '☸️',
    },
    {
      name: 'AWS Certified Solutions Architect - Associate',
      issuer: 'Amazon Web Services',
      icon: '☁️',
    },
  ]

  return (
    <section id="certifications" className="section-padding bg-devops-gray/30 relative">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Certifications</span>
            </h2>
            <div className="w-24 h-1 bg-devops-green mx-auto relative">
              <div className="absolute inset-0 bg-devops-green blur-lg opacity-50"></div>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <ScrollReveal key={idx} delay={idx * 100} direction="up">
              <div className="group glass-effect rounded-lg p-8 hover:border-devops-green transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-devops-green/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start mb-4">
                    <div className="text-4xl mr-4 group-hover:scale-110 transition-transform duration-300">
                      {cert.icon}
                    </div>
                    <div className="ml-auto relative">
                      <Award className="text-devops-green group-hover:text-emerald-400 transition-colors" size={24} />
                      <Sparkles className="absolute -top-1 -right-1 text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" size={12} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-100 mb-2 group-hover:text-devops-green transition-colors">
                    {cert.name}
                  </h3>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                    {cert.issuer}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications

