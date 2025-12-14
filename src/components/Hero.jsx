import { useEffect, useState } from 'react'
import { ChevronDown, Terminal } from 'lucide-react'

const phrases = ['DevOps Engineer', 'Cloud Architect', 'Kubernetes Specialist', 'Infrastructure Automation']

const Hero = () => {
  const [typedText, setTypedText] = useState('')
  const [currentPhrase, setCurrentPhrase] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

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

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-devops-green/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="flex items-center justify-center mb-6">
          <Terminal className="text-devops-green mr-3" size={32} />
          <span className="font-mono text-devops-green text-sm">Welcome to my terminal</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          <span className="text-gray-100">Hi, I'm </span>
          <span className="text-gradient">Sumanth Reddy</span>
        </h1>
        
        <div className="h-16 md:h-20 mb-6">
          <h2 className="text-3xl md:text-5xl font-mono text-devops-green">
            {typedText}
            <span className="animate-pulse">|</span>
          </h2>
        </div>
        
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
          Building scalable cloud infrastructure and automating DevOps workflows
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#projects"
            className="px-8 py-3 bg-devops-green hover:bg-devops-green/80 text-white rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
          >
            View Projects
          </a>
          <a
            href="#about"
            className="px-8 py-3 glass-effect border border-devops-light hover:border-devops-green text-gray-300 hover:text-devops-green rounded-lg font-medium transition-all duration-200"
          >
            Learn More
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="text-devops-green" size={32} />
      </a>
    </section>
  )
}

export default Hero

