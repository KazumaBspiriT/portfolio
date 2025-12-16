/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'console-bg': '#0c0c0c',
        'console-header': '#1f1f1f',
        'console-text': '#cccccc',
        'console-green': '#00ff00',
        'console-blue': '#007acc',
        'console-cyan': '#00ffff',
        'console-yellow': '#ffff00',
        'console-red': '#ff0000',
        'aws-orange': '#FF9900',
        'k8s-blue': '#326CE5',
      },
      fontFamily: {
        'mono': ['"Fira Code"', '"JetBrains Mono"', 'Consolas', 'monospace'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #1f1f1f 1px, transparent 1px), linear-gradient(to bottom, #1f1f1f 1px, transparent 1px)",
      }
    },
  },
  plugins: [],
}
