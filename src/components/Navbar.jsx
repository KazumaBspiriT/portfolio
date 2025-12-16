import { useState, useEffect } from 'react'
import { Menu, X, Terminal, Server, Wifi, User, Globe } from 'lucide-react'

const Navbar = ({ scrollY }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const navItems = [
    { name: 'overview', href: '#about', icon: Terminal },
    { name: 'deployments', href: '#projects', icon: Server },
    { name: 'infrastructure', href: '#skills', icon: Wifi },
    { name: 'documentation', href: '#experience', icon: Globe },
  ]

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-console-header ${scrollY > 20 ? 'bg-console-bg/95 backdrop-blur-md' : 'bg-console-bg'
      }`}>
      {/* Top Warning Banner - Optional decoration */}
      <div className="bg-console-header text-[10px] text-center text-console-text py-0.5 tracking-widest uppercase">
        System Status: Operational | Region: us-east-1
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">

          {/* Logo / Brand */}
          <div className="flex items-center flex-shrink-0 gap-4">
            <a href="#" className="flex items-center text-sm font-mono font-bold text-console-green hover:text-console-cyan transition-colors">
              <Terminal className="mr-2" size={16} />
              root@sumanth.dev:~#
            </a>

            <div className="hidden md:flex items-center px-2 py-0.5 rounded textxs bg-console-header text-console-text border border-console-text/20">
              <span className="w-2 h-2 rounded-full bg-console-green mr-2 animate-pulse"></span>
              HEAD
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-3 py-1.5 text-xs font-mono text-console-text hover:text-console-green hover:bg-console-header rounded transition-all duration-200 flex items-center gap-2 group"
                >
                  <item.icon size={12} className="group-hover:text-console-green transition-colors" />
                  ./{item.name}
                </a>
              ))}
            </div>

            <div className="h-6 w-px bg-console-header mx-2"></div>

            <div className="flex items-center gap-3 text-xs font-mono text-console-text/60">
              <span className="flex items-center gap-1">
                <User size={12} />
                visitor
              </span>
              <span>{currentTime}</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <span className="text-xs font-mono text-console-text mr-4">{currentTime}</span>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-console-text hover:text-console-green transition-colors p-1"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-console-bg border-b border-console-header animate-slide-up">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-sm font-mono text-console-text hover:text-console-green hover:bg-console-header rounded-md transition-all flex items-center gap-2"
              >
                <item.icon size={14} />
                ./{item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

