import React from 'react';
import { Github, Twitter, Terminal } from 'lucide-react';

function MatrixRain() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="matrix-rain absolute inset-0" aria-hidden="true" />
    </div>
  );
}

function TerminalPrompt({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center space-x-2 font-mono">
      <span className="text-green-500">root@nodespeak</span>
      <span className="text-gray-500">:</span>
      <span className="text-blue-400">~</span>
      <span className="text-gray-500">$</span>
      <span className="text-white">{children}</span>
    </div>
  );
}

function App() {
  const [buttonText, setButtonText] = React.useState('./access_sarasa');

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono relative overflow-hidden">
      <MatrixRain />
      
      {/* Navigation */}
      <nav className="absolute top-6 right-6 z-10">
        <a 
          href="https://sarasa-app.com" 
          className="group px-6 py-2 bg-black border-2 border-green-500 text-green-400 font-bold
                    hover:bg-green-500 hover:text-black transition-all duration-300
                    focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-black"
          onMouseEnter={() => setButtonText('./nodespeak')}
          onMouseLeave={() => setButtonText('./access_sarasa')}
        >
          {buttonText}
        </a>
      </nav>

      {/* Logo Section */}
      <div className="container mx-auto px-6 pt-16 pb-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <img 
            src="https://raw.githubusercontent.com/yourusername/NodeSpeak/main/assets/NodeSpeak001.png" 
            alt="NodeSpeak Logo" 
            className="w-full max-w-2xl mx-auto h-auto mb-8"
          />
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-6 relative z-10">
        {/* Terminal Window */}
        <div className="max-w-4xl mx-auto bg-black/80 backdrop-blur-sm border border-green-500/30 rounded-lg 
                      shadow-[0_0_15px_rgba(34,197,94,0.2)] overflow-hidden">
          {/* Terminal Header */}
          <div className="bg-gray-900 px-4 py-2 flex items-center border-b border-green-500/30">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="flex-1 text-center text-sm text-gray-400">
              <Terminal className="inline-block w-4 h-4 mr-2" />
              nodespeak_terminal
            </div>
          </div>

          {/* Terminal Content */}
          <div className="p-6 space-y-8">
            <TerminalPrompt>echo "NodeSpeak Beta"</TerminalPrompt>
            <div className="space-y-4 pl-4">
              <h1 className="text-3xl font-bold text-green-400 animate-pulse">
                Welcome to NodeSpeak v1.0.0
              </h1>
              <p className="text-green-300/90 typing-effect">
                Initializing secure, decentralized communication protocol...
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-sm py-4 
                       border-t border-green-500/30">
        <div className="container mx-auto px-6 flex justify-center space-x-8">
          <a 
            href="https://github.com/nodespeak/nodespeak" 
            className="flex items-center space-x-2 text-green-400/80 hover:text-green-400 
                     hover:shadow-[0_0_10px_rgba(34,197,94,0.3)] transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-5 h-5" />
            <span>git clone nodespeak</span>
          </a>
          <a 
            href="https://twitter.com/nodespeak" 
            className="flex items-center space-x-2 text-green-400/80 hover:text-green-400 
                     hover:shadow-[0_0_10px_rgba(34,197,94,0.3)] transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="w-5 h-5" />
            <span>follow --channel x</span>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;