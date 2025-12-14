import { Award, ExternalLink } from 'lucide-react'

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
    <section id="certifications" className="section-padding bg-devops-gray/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-devops-green mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="glass-effect rounded-lg p-8 hover:border-devops-green transition-all duration-200 group"
            >
              <div className="flex items-start mb-4">
                <div className="text-4xl mr-4">{cert.icon}</div>
                <Award className="text-devops-green ml-auto group-hover:scale-110 transition-transform" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-100 mb-2">{cert.name}</h3>
              <p className="text-gray-400 text-sm">{cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications

