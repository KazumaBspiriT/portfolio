import Terminal from './Terminal'
import { ArrowDown } from 'lucide-react'

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-console-bg pt-16">

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>

      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-console-green/10 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-console-blue/10 rounded-full blur-3xl animate-pulse delay-1000 pointer-events-none"></div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">

        <div className="text-center mb-8 animate-fade-in-delay">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-mono tracking-tight text-white">
            <span className="text-console-green">&lt;</span>
            Cloud_Architect
            <span className="text-console-blue"> /&gt;</span>
          </h1>
          <p className="text-console-text text-lg md:text-xl font-mono max-w-2xl mx-auto">
            Automating infrastructure, scaling systems, and building platforms.
          </p>
        </div>

        <div className="w-full animate-slide-up">
          <Terminal />
        </div>

        <div className="mt-12 animate-bounce">
          <a href="#projects" className="flex flex-col items-center text-console-text/50 hover:text-console-green transition-colors">
            <span className="text-xs font-mono mb-2">scroll_down()</span>
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero

