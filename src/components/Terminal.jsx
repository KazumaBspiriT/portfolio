import { useState, useEffect, useRef } from 'react'
import { Terminal as TerminalIcon, Maximize2, Minus, X } from 'lucide-react'

const Terminal = () => {
    const [history, setHistory] = useState([
        { type: 'system', content: 'Last login: ' + new Date().toString() },
        { type: 'system', content: 'Welcome to sumanth.dev cloud shell. Type "help" for instructions.' },
    ])
    const [input, setInput] = useState('')
    const bottomRef = useRef(null)

    const commands = {
        help: 'Available commands: about, projects, skills, contact, clear, whoami, exit',
        whoami: 'Sumanth Reddy - DevOps Engineer & Cloud Architect',
        about: 'Executing cat about.md...\nI build scalable infrastructure and automate everything.',
        projects: 'Listing ./projects/...\n- Cloud Native Infrastructure\n- K8s Autoscaler\n- Serverless Pipeline\n(Type "cd projects" for interactive mode)',
        skills: 'Fetching dependencies...\n- Kubernetes\n- AWS/GCP\n- Terraform\n- CI/CD\n- Python/Go',
        contact: 'Opening connection to port 25...\nEmail: sumanth@example.com\nGitHub: @sumanth',
        clear: 'CLEAR_ACTION',
        exit: 'Goodbye! (Session terminated)'
    }

    const handleCommand = (e) => {
        if (e.key === 'Enter') {
            const cmd = input.trim().toLowerCase()
            let response = commands[cmd] || `command not found: ${cmd}`

            if (cmd === 'clear') {
                setHistory([])
            } else {
                setHistory([...history,
                { type: 'input', content: input },
                { type: 'output', content: response }
                ])
            }

            setInput('')
        }
    }

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [history])

    return (
        <div className="w-full max-w-3xl mx-auto bg-console-bg border border-console-header text-console-text rounded-lg shadow-2xl overflow-hidden font-mono text-sm sm:text-base">
            {/* Terminal Header */}
            <div className="bg-console-header px-4 py-2 flex items-center justify-between border-b border-console-text/10">
                <div className="flex items-center gap-2">
                    <TerminalIcon size={14} className="text-console-text/50" />
                    <span className="text-xs text-console-text/70">sumanth@cloud-shell ~</span>
                </div>
                <div className="flex items-center gap-2">
                    <Minus size={14} className="text-console-text/50 hover:text-white cursor-pointer" />
                    <Maximize2 size={14} className="text-console-text/50 hover:text-white cursor-pointer" />
                    <X size={14} className="text-console-text/50 hover:text-red-500 cursor-pointer" />
                </div>
            </div>

            {/* Terminal Body */}
            <div className="p-4 h-[400px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent bg-black/50 backdrop-blur-sm">
                {history.map((entry, i) => (
                    <div key={i} className="mb-2">
                        {entry.type === 'input' ? (
                            <div className="flex gap-2">
                                <span className="text-console-green">➜</span>
                                <span className="text-console-blue">~</span>
                                <span>{entry.content}</span>
                            </div>
                        ) : (
                            <div className={`whitespace-pre-wrap ${entry.type === 'system' ? 'text-console-text/50' : 'text-console-text'}`}>
                                {entry.content}
                            </div>
                        )}
                    </div>
                ))}

                {/* Input Line */}
                <div className="flex gap-2 items-center">
                    <span className="text-console-green">➜</span>
                    <span className="text-console-blue">~</span>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleCommand}
                        className="bg-transparent border-none outline-none flex-1 focus:ring-0 text-console-text caret-console-green"
                        autoFocus
                        spellCheck="false"
                    />
                </div>
                <div ref={bottomRef} />
            </div>
        </div>
    )
}

export default Terminal
