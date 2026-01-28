import { ExternalLink, Github, Cloud, Network, Server, Play, Circle, Box, Activity, Layers, Cpu, Database, Shield, Monitor, BarChart3, Webhook } from 'lucide-react'

import { useState } from 'react'
import MultiCloudArchitecture from './MultiCloudArchitecture'

const Projects = () => {
  // Track active tab for each project: { [id]: 'overview' | 'specs' | 'architecture' }
  const [projectTabs, setProjectTabs] = useState({})

  const projects = [
    {
      id: 'svc-01-ops-dashboard',
      name: 'multicloud-ops-dashboard',
      type: 'Operations Platform',
      status: 'active',
      uptime: '99.9%',
      region: 'aws-us-east-1',
      description: 'Unified resource management platform for AWS, Azure, and GCP using Go (Gin), reducing context switching by 40%. Real-time EC2 lifecycle management with WebSocket logs and custom observability stack.',
      tech: ['Go', 'React', 'TypeScript', 'Docker', 'AWS SDK', 'Prometheus', 'Grafana'],
      github: null,
      stats: { efficiency: '+40%', clouds: 3 },
      details: {
        features: [
          'Unified Multi-Cloud Resource Management',
          'Real-time EC2 Lifecycle Management (Start, Stop, Reboot)',
          'Live WebSocket Log Streaming',
          'Custom Prometheus Middleware for API Metrics',
          'Grafana Dashboards for Latency Visualization',
          'Dynamic Cost Analysis Charts (React/TypeScript)',
        ],
        modes: [
          { name: 'Backend', desc: 'Go (Gin) REST API', icon: Server },
          { name: 'Frontend', desc: 'React/TypeScript SPA', icon: Monitor },
          { name: 'Observability', desc: 'Prometheus + Grafana', icon: BarChart3 },
        ],
        stack: {
          'Backend': 'Go 1.21+, Gin Framework',
          'Frontend': 'React 18, TypeScript',
          'Infrastructure': 'Docker, AWS SDK v2',
          'Monitoring': 'Prometheus, Grafana',
          'Real-time': 'WebSocket (Gorilla)'
        }
      }
    },
    {
      id: 'svc-02-hybrid-cloud',
      name: 'hybrid-cloud-orchestration',
      type: 'Infrastructure Automation',
      status: 'active',
      uptime: '99.99%',
      region: 'aws-global',
      description: 'End-to-end hybrid cloud orchestration using Terraform to provision AWS EKS for dynamic microservices and S3 for static hosting. State locking via DynamoDB and automated CI/CD with GitHub Actions.',
      tech: ['Terraform', 'Ansible', 'AWS EKS', 'S3', 'DynamoDB', 'GitHub Actions'],
      github: null,
      stats: { speed: '+50%', services: 'multi' },
      details: {
        features: [
          'Multi-Cloud Infrastructure (AWS EKS)',
          'Dynamic Microservices Deployment',
          'Static Content Hosting (S3)',
          'State Locking via DynamoDB',
          'Route 53 DNS Management',
          'Automated Docker Builds',
          'Kubernetes Deployment Pipelines',
        ],
        modes: [
          { name: 'IaC', desc: 'Terraform Provisioning', icon: Layers },
          { name: 'Config', desc: 'Ansible Automation', icon: Box },
          { name: 'CI/CD', desc: 'GitHub Actions', icon: Webhook },
        ],
        stack: {
          'IaC': 'Terraform >= 1.0',
          'Config': 'Ansible >= 2.9',
          'CI/CD': 'GitHub Actions',
          'Container': 'Docker & Kubernetes',
          'State': 'DynamoDB (Locking)',
          'DNS': 'Route 53'
        }
      }
    },
    {
      id: 'svc-03-vxlan',
      name: 'vxlan-ipvlan-migration',
      type: 'Network Migration',
      status: 'completed',
      uptime: '100%',
      region: 'on-prem',
      description: 'Executed critical migration of 100+ network devices from VXLAN to IPVLAN protocols, resulting in 20% improvement in network throughput. Utilized Ansible for configuration drift management.',
      tech: ['Ansible', 'F5 BIG-IP', 'Linux', 'Networking'],
      github: null,
      stats: { throughput: '+20%', devices: 100 },
      details: {
        features: [
          'VXLAN to IPVLAN Protocol Migration',
          '100+ Network Devices Migrated',
          'Configuration Drift Management (Ansible)',
          'Staged Cutovers with Linux Namespaces',
          'Zero-Downtime Migration Strategy',
          'Service Availability Maintained',
        ],
        modes: [
          { name: 'Automation', desc: 'Ansible Playbooks', icon: Box },
          { name: 'Load Balancer', desc: 'F5 BIG-IP', icon: Server },
          { name: 'Networking', desc: 'Linux Namespaces', icon: Network },
        ],
        stack: {
          'Automation': 'Ansible >= 2.9',
          'Load Balancer': 'F5 BIG-IP (LTM, GTM)',
          'OS': 'Linux (RHEL8)',
          'Protocol': 'VXLAN → IPVLAN'
        }
      }
    },
  ]

  const setTab = (projectId, tab) => {
    setProjectTabs(prev => ({ ...prev, [projectId]: tab }))
  }

  const getActiveTab = (projectId) => {
    if (projectTabs[projectId]) return projectTabs[projectId]
    // Default to 'specs' for projects with details to show information immediately
    if (projectId === 'svc-01-ops-dashboard' || projectId === 'svc-02-hybrid-cloud' || projectId === 'svc-03-vxlan') return 'specs'
    return 'overview'
  }

  return (
    <section id="projects" className="section-padding bg-console-bg relative border-t border-console-header">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-8 border-b border-console-header pb-4">
          <h2 className="text-2xl font-mono font-bold text-console-text">
            <span className="text-console-green">./</span>active_deployments
          </h2>
          <span className="px-2 py-0.5 rounded textxs bg-console-header text-console-text">3 active</span>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`transition-all duration-300 ${project.hasArchitecture ? 'md:col-span-2' : ''}`}
            >
              <div className={`bg-console-bg border border-console-header rounded p-4 font-mono hover:border-console-green transition-all duration-300 group relative overflow-hidden ${project.hasArchitecture ? 'ring-1 ring-console-green/20' : ''}`}>

                {/* Status Bar */}
                <div className="flex justify-between items-center mb-4 text-xs border-b border-console-header pb-2">
                  <div className="flex items-center gap-2">
                    <Box size={14} className="text-console-blue" />
                    <span className="text-console-text/70">{project.id}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${project.status === 'active' ? 'bg-console-green animate-pulse' : 'bg-console-text/50'}`}></span>
                    <span className="uppercase text-console-text/70">{project.status}</span>
                  </div>
                </div>

                {/* Header */}
                <div className="mb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-console-green group-hover:underline decoration-console-green/30 underline-offset-4">
                      {project.name}
                    </h3>

                    {/* Tab Navigation */}
                    {project.hasArchitecture && (
                      <div className="flex gap-1 bg-console-header/20 p-1 rounded">
                        {['overview', 'specs', 'architecture'].map(tab => (
                          <button
                            key={tab}
                            onClick={() => setTab(project.id, tab)}
                            className={`px-3 py-1 text-xs rounded transition-all ${getActiveTab(project.id) === tab
                              ? 'bg-console-green text-console-bg font-bold'
                              : 'text-console-text hover:text-console-green'
                              }`}
                          >
                            ./{tab}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  <p className="text-xs text-console-text/50 mb-3">{project.type}</p>
                </div>

                {/* Content Area */}
                <div className="min-h-[200px]">

                  {/* OVERVIEW TAB */}
                  {getActiveTab(project.id) === 'overview' && (
                    <div className="animate-fade-in">
                      <p className="text-sm text-console-text mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="grid grid-cols-2 gap-2 mb-4 bg-console-header/30 p-2 rounded">
                        {Object.entries(project.stats).map(([key, value]) => (
                          <div key={key} className="flex justify-between text-xs">
                            <span className="text-console-text/60">{key}:</span>
                            <span className="text-console-yellow">{value}</span>
                          </div>
                        ))}
                        <div className="flex justify-between text-xs">
                          <span className="text-console-text/60">region:</span>
                          <span className="text-console-blue">{project.region}</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-console-text/60">uptime:</span>
                          <span className="text-console-green">{project.uptime}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* SPECS TAB */}
                  {getActiveTab(project.id) === 'specs' && project.details && (
                    <div className="animate-fade-in space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-console-header/10 p-3 rounded border border-console-header/30">
                          <h4 className="text-xs text-console-green mb-2 uppercase tracking-wide flex items-center gap-2">
                            <Shield size={12} /> Key Features
                          </h4>
                          <ul className="space-y-1">
                            {project.details.features.map((feat, i) => (
                              <li key={i} className="text-xs text-console-text/80 flex items-start gap-2">
                                <span className="text-console-green mt-0.5">▹</span> {feat}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-console-header/10 p-3 rounded border border-console-header/30">
                          <h4 className="text-xs text-console-blue mb-2 uppercase tracking-WIDE flex items-center gap-2">
                            <Cpu size={12} /> Tech Stack
                          </h4>
                          <div className="space-y-1">
                            {Object.entries(project.details.stack).map(([cat, val], i) => (
                              <div key={i} className="flex justify-between text-xs border-b border-console-text/10 pb-1 last:border-0">
                                <span className="text-console-text/50">{cat}:</span>
                                <span className="text-console-text/90">{val}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xs text-console-yellow mb-2 uppercase tracking-wide flex items-center gap-2">
                          <Layers size={12} /> Deployment Modes
                        </h4>
                        <div className="grid grid-cols-3 gap-2">
                          {project.details.modes.map((mode, i) => (
                            <div key={i} className="bg-console-bg border border-console-header p-2 rounded hover:border-console-yellow transition-colors text-center">
                              <mode.icon size={16} className="mx-auto mb-1 text-console-yellow" />
                              <div className="text-xs font-bold text-console-text">{mode.name}</div>
                              <div className="text-[10px] text-console-text/50 leading-tight">{mode.desc}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* ARCHITECTURE TAB */}
                  {getActiveTab(project.id) === 'architecture' && (
                    <div className="animate-fade-in">
                      <MultiCloudArchitecture />
                      <p className="text-[10px] text-console-text/40 text-center mt-2 font-mono">
                        * CI/CD & Provisioning Pipeline
                      </p>
                    </div>
                  )}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between mt-4 pt-2 border-t border-console-header/50">
                  <div className="flex gap-2">
                    {project.tech.map(t => (
                      <span key={t} className="text-[10px] px-1.5 py-0.5 border border-console-text/20 rounded text-console-text/70">
                        {t}
                      </span>
                    ))}
                  </div>

                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-console-text hover:text-console-green transition-colors flex items-center gap-2 text-xs">
                      <Github size={16} />
                      src_code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

