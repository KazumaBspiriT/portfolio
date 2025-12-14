import { useState, useEffect } from 'react'
import { Menu, X, Terminal } from 'lucide-react'

const Navbar = ({ scrollY }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1))
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      setActiveSection(current || '')
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrollY > 50 ? 'glass-effect shadow-lg backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="#" className="group flex items-center text-xl font-mono font-semibold text-gradient hover:scale-105 transition-transform duration-300">
              <Terminal className="mr-2 text-devops-green group-hover:text-emerald-400 transition-colors" size={20} />
              {'>'} sumanth.dev
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1)
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`relative group text-gray-300 hover:text-devops-green transition-all duration-300 font-medium ${
                      isActive ? 'text-devops-green' : ''
                    }`}
                  >
                    {item.name}
                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-devops-green transition-all duration-300 group-hover:w-full ${
                      isActive ? 'w-full' : ''
                    }`}></span>
                  </a>
                )
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-devops-green transition-colors p-2 rounded-lg hover:bg-devops-light/20"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-effect border-t border-devops-light/30 animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item, idx) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-gray-300 hover:text-devops-green hover:bg-devops-light/20 rounded-md transition-all duration-300 transform hover:translate-x-2"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

