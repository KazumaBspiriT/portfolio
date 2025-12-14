import { useEffect, useState } from 'react'
import { ChevronDown, Terminal, Sparkles } from 'lucide-react'
import ParticleBackground from './ParticleBackground'

const phrases = ['DevOps Engineer', 'Cloud Architect', 'Kubernetes Specialist', 'Infrastructure Automation']

const Hero = () => {
  const [typedText, setTypedText] = useState('')
  const [currentPhrase, setCurrentPhrase] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100
    const current = phrases[currentPhrase]

    if (!isDeleting && typedText === current) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000)
      return () => clearTimeout(timeout)
    } else if (isDeleting && typedText === '') {
      setIsDeleting(false)
      setCurrentPhrase((prev) => (prev + 1) % phrases.length)
    } else {
      const timeout = setTimeout(() => {
        setTypedText(isDeleting 
          ? current.substring(0, typedText.length - 1)
          : current.substring(0, typedText.length + 1)
        )
      }, typeSpeed)
      return () => clearTimeout(timeout)
    }
  }, [typedText, isDeleting, currentPhrase])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <ParticleBackground />
      
      {/* Animated background elements with glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-20 left-10 w-72 h-72 bg-devops-green/10 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${(mousePosition.x - window.innerWidth / 2) * 0.02}px, ${(mousePosition.y - window.innerHeight / 2) * 0.02}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        ></div>
        <div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${(mousePosition.x - window.innerWidth / 2) * -0.02}px, ${(mousePosition.y - window.innerHeight / 2) * -0.02}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        ></div>
      </div>

      {/* Glowing grid pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `
          linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px'
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="flex items-center justify-center mb-6 animate-fade-in">
          <div className="relative">
            <Terminal className="text-devops-green mr-3 animate-pulse" size={32} />
            <Sparkles className="absolute -top-1 -right-1 text-emerald-400 animate-ping" size={12} />
          </div>
          <span className="font-mono text-devops-green text-sm animate-glow">Welcome to my terminal</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-slide-up">
          <span className="text-gray-100">Hi, I'm </span>
          <span className="text-gradient animate-gradient">Sumanth Reddy</span>
        </h1>
        
        <div className="h-16 md:h-20 mb-6">
          <h2 className="text-3xl md:text-5xl font-mono text-devops-green relative inline-block">
            <span className="relative">
              {typedText}
              <span className="animate-pulse">|</span>
              <span className="absolute inset-0 text-devops-green blur-sm opacity-50">{typedText}</span>
            </span>
          </h2>
        </div>
        
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8 animate-fade-in-delay">
          Building scalable cloud infrastructure and automating DevOps workflows
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-2">
          <a
            href="#projects"
            className="group relative px-8 py-3 bg-devops-green hover:bg-devops-green/80 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 overflow-hidden"
          >
            <span className="relative z-10">View Projects</span>
            <span className="absolute inset-0 bg-gradient-to-r from-devops-green to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </a>
          <a
            href="#about"
            className="group px-8 py-3 glass-effect border border-devops-light hover:border-devops-green text-gray-300 hover:text-devops-green rounded-lg font-medium transition-all duration-300 relative overflow-hidden"
          >
            <span className="relative z-10">Learn More</span>
            <span className="absolute inset-0 bg-devops-green/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce group"
      >
        <div className="relative">
          <ChevronDown className="text-devops-green group-hover:text-emerald-400 transition-colors" size={32} />
          <div className="absolute inset-0 bg-devops-green/20 blur-xl group-hover:bg-emerald-400/20 transition-colors"></div>
        </div>
      </a>
    </section>
  )
}

export default Hero

