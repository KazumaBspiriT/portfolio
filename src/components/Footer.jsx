import { Mail, Phone, Linkedin, Github } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const contactInfo = [
    { icon: Mail, text: 'sumanthusa2324@gmail.com', href: 'mailto:sumanthusa2324@gmail.com' },
    { icon: Phone, text: '513-200-9463', href: 'tel:513-200-9463' },
    { icon: Linkedin, text: 'linkedin.com/in/sumanth-reddy', href: 'https://linkedin.com/in/sumanth-reddy' },
  ]

  return (
    <footer className="border-t border-devops-light/30 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4 font-mono">
              {'>'} sumanth.dev
            </h3>
            <p className="text-gray-400">
              DevOps Engineer | Cloud Architect | Infrastructure Automation Specialist
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-100 mb-4">Get in Touch</h4>
            <div className="space-y-3">
              {contactInfo.map((contact, idx) => {
                const Icon = contact.icon
                return (
                  <a
                    key={idx}
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center text-gray-400 hover:text-devops-green transition-colors"
                  >
                    <Icon size={18} className="mr-3" />
                    <span>{contact.text}</span>
                  </a>
                )
              })}
            </div>
          </div>
        </div>
        <div className="border-t border-devops-light/30 pt-8 text-center text-gray-400 text-sm">
          <p>© {currentYear} Sumanth Reddy Busireddy. Built with React & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

