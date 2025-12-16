import { useEffect, useState } from 'react'
import { Github, Server, Box, Globe, Cloud, Database, Layers } from 'lucide-react'

const MultiCloudArchitecture = () => {
    const [activeStage, setActiveStage] = useState(0)

    // Simulation loop
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStage(prev => (prev + 1) % 5)
        }, 2000)
        return () => clearInterval(interval)
    }, [])

    const steps = [
        { id: 'source', label: 'Source Code', icon: Github, color: 'text-white' },
        { id: 'ci', label: 'CI/CD Pipeline', icon: Server, color: 'text-console-yellow' },
        { id: 'build', label: 'Docker Build', icon: Box, color: 'text-console-blue' },
        { id: 'iac', label: 'Terraform Plan', icon: Layers, color: 'text-purple-400' },
        { id: 'deploy', label: 'Multi-Cloud', icon: Cloud, color: 'text-console-green' },
    ]

    return (
        <div className="w-full bg-[#0a0a0a] border-t border-console-header p-6 mt-4 relative overflow-hidden rounded-b-lg">
            <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none"></div>

            {/* Flow Visualization */}
            <div className="relative z-10 flex flex-col items-center">

                {/* Steps Container */}
                <div className="flex items-start justify-between w-full max-w-5xl relative z-10">
                    {steps.map((step, idx) => {
                        const isActive = idx === activeStage
                        const isPast = idx < activeStage
                        const isNext = idx === activeStage + 1
                        const Icon = step.icon

                        return (
                            <div key={step.id} className="flex-1 flex items-center">
                                {/* Step Node */}
                                <div className="flex flex-col items-center gap-3 relative z-20 w-full">
                                    <div
                                        className={`
                                            w-12 h-12 rounded-lg flex items-center justify-center border transition-all duration-500 relative
                                            ${isActive ? `bg-console-bg border-${step.color.split('-')[1]} shadow-[0_0_20px_rgba(0,255,0,0.4)] scale-110` : 'bg-console-header/20 border-console-header'}
                                            ${isPast ? 'text-console-green border-console-green shadow-[0_0_10px_rgba(0,255,0,0.2)]' : ''}
                                            ${!isActive && !isPast ? 'text-console-text/30' : ''}
                                        `}
                                    >
                                        <Icon size={24} className={isActive || isPast ? step.color : 'text-inherit'} />

                                        {/* Status Indicator Dot */}
                                        {isActive && (
                                            <span className="absolute -top-1 -right-1 flex h-3 w-3">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-console-green opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-3 w-3 bg-console-green"></span>
                                            </span>
                                        )}
                                    </div>

                                    {/* Label */}
                                    <div className={`text-xs font-mono text-center absolute top-14 w-32 transition-colors duration-300 ${isActive || isPast ? 'text-console-text' : 'text-console-text/30'}`}>
                                        {step.label}
                                        {isActive && <div className="text-[10px] text-console-green animate-pulse mt-1">processing...</div>}
                                    </div>
                                </div>

                                {/* Connector Line (except after last item) */}
                                {idx < steps.length - 1 && (
                                    <div className="h-[2px] w-full bg-console-header relative mx-2 -mt-8 overflow-hidden rounded">
                                        <div
                                            className={`absolute inset-0 bg-console-green transition-all duration-1000 ease-in-out ${isPast ? 'w-full' : 'w-0'}`}
                                            style={{ boxShadow: '0 0 10px #00ff00' }}
                                        ></div>
                                        {/* Animated Data Packet when moving to next stage */}
                                        {isActive && (
                                            <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full blur-[2px] animate-flow-packet"></div>
                                        )}
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>

                {/* Cloud Endpoints */}
                <div className="flex gap-6 mt-20 w-full max-w-4xl justify-center opacity-80 border-t border-console-header/30 pt-6">
                    <span className="text-xs text-console-text/40 font-mono absolute -mt-9 bg-console-bg px-2">Deployed To</span>

                    {['AWS', 'Azure', 'GCP'].map((cloud, i) => (
                        <div key={cloud} className={`flex flex-col items-center gap-2 transition-all duration-500 ${activeStage === 4 ? 'opacity-100 translate-y-0' : 'opacity-30 translate-y-2'}`}>
                            <div className={`p-2 rounded border border-console-header bg-console-bg ${activeStage === 4 ? 'shadow-[0_0_15px_rgba(0,255,0,0.2)] border-console-green/50' : ''}`}>
                                {cloud === 'AWS' && <Cloud size={20} className="text-[#FF9900]" />}
                                {cloud === 'Azure' && <Globe size={20} className="text-[#007acc]" />}
                                {cloud === 'GCP' && <Database size={20} className="text-[#4285F4]" />}
                            </div>
                            <span className="text-[10px] text-console-text font-mono">{cloud}</span>
                        </div>
                    ))}
                </div>

            </div>


        </div>
    )
}

export default MultiCloudArchitecture
