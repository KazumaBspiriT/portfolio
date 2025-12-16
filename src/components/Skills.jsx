import { Code, Cloud, Settings, Network, Cpu, Database } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const Skills = () => {
  const systemConfig = {
    languages: {
      type: 'runtime',
      modules: ['Go', 'Python', 'Bash', 'JavaScript'],
      version: 'latest'
    },
    infrastructure: {
      type: 'core',
      providers: ['AWS', 'Azure', 'GCP'],
      containerization: ['Docker', 'Podman', 'K8s'],
      iac: ['Terraform', 'Ansible']
    },
    networking: {
      type: 'transport',
      protocols: ['TCP/IP', 'HTTP/S', 'DNS'],
      tools: ['F5 BIG-IP', 'NGINX', 'Wireshark']
    }
  }

  return (
    <section id="skills" className="section-padding bg-console-bg border-t border-console-header relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute right-0 top-0 w-1/3 h-full opacity-5 pointer-events-none">
        <div className="h-full w-full bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#00ff00_10px,#00ff00_11px)]"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-8 border-b border-console-header pb-4">
            <h2 className="text-2xl font-mono font-bold text-console-text">
              <span className="text-console-green">./</span>system_configuration
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 font-mono">

          {/* Left Column: Visual Stack */}
          <ScrollReveal direction="left">
            <div className="bg-console-header/30 border border-console-header rounded p-6">
              <div className="flex items-center gap-2 mb-4 text-console-cyan">
                <Cpu size={18} />
                <h3 className="uppercase tracking-widest text-sm font-bold">Stack Trace</h3>
              </div>

              <div className="space-y-4">
                <div className="group">
                  <div className="text-xs text-console-text/50 mb-1">layer: platform</div>
                  <div className="flex flex-wrap gap-2">
                    {['Kubernetes', 'AWS', 'Linux (RHEL8)'].map(s => (
                      <span key={s} className="px-2 py-1 bg-console-blue/10 text-console-blue border border-console-blue/30 rounded text-xs hover:bg-console-blue/20 transition-colors cursor-crosshair">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="group">
                  <div className="text-xs text-console-text/50 mb-1">layer: automation</div>
                  <div className="flex flex-wrap gap-2">
                    {['Terraform', 'Ansible', 'GitHub Actions'].map(s => (
                      <span key={s} className="px-2 py-1 bg-console-green/10 text-console-green border border-console-green/30 rounded text-xs hover:bg-console-green/20 transition-colors cursor-crosshair">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="group">
                  <div className="text-xs text-console-text/50 mb-1">layer: observability</div>
                  <div className="flex flex-wrap gap-2">
                    {['Prometheus', 'Grafana', 'Wireshark'].map(s => (
                      <span key={s} className="px-2 py-1 bg-console-yellow/10 text-console-yellow border border-console-yellow/30 rounded text-xs hover:bg-console-yellow/20 transition-colors cursor-crosshair">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: JSON Config View */}
          <ScrollReveal delay={200} direction="right">
            <div className="bg-[#0a0a0a] border border-console-header rounded p-4 relative group">
              <div className="absolute top-2 right-2 flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
              </div>
              <pre className="text-xs sm:text-sm text-console-text/80 overflow-x-auto">
                <code>
                  <span className="text-console-blue">const</span> <span className="text-console-yellow">current_config</span> = {'{'}
                  {Object.entries(systemConfig).map(([key, val], i) => (
                    <div key={key} className="pl-4">
                      <span className="text-console-text">"{key}"</span>: <span className="text-console-green">"enabled"</span>,
                      <span className="text-console-text/50">// loaded: {val.modules?.join(', ') || val.providers?.join(', ')}...</span>
                    </div>
                  ))}
                  {'}'}
                </code>
              </pre>
              <div className="mt-4 pt-4 border-t border-console-header/30 text-xs text-console-text/40">
                <span className="animate-pulse">●</span> system check passed: ready for deployment
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  )
}

export default Skills

