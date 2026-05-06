import { useState } from 'react'

export default function Download() {
  const [downloadCount, setDownloadCount] = useState(50000)

  const platforms = [
    {
      icon: '🪟',
      name: 'Windows',
      description: 'Windows 10 ou superior',
      size: '245 MB',
      color: 'from-blue-500 to-blue-700'
    },
    {
      icon: '🍎',
      name: 'macOS',
      description: 'macOS 10.15 ou superior',
      size: '198 MB',
      color: 'from-gray-400 to-gray-600'
    },
    {
      icon: '🐧',
      name: 'Linux',
      description: 'Ubuntu 18.04 ou superior',
      size: '220 MB',
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      icon: '📱',
      name: 'Mobile',
      description: 'iOS e Android',
      size: '156 MB',
      color: 'from-green-400 to-green-600'
    }
  ]

  const handleDownload = () => {
    setDownloadCount(prev => prev + 1)
  }

  return (
    <section id="download" className="py-20 sm:py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg to-dark-card pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-neon-green/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-gaming bg-clip-text text-transparent">Comece a Jogar Agora</h2>
          <p className="text-gray-300 text-lg">100% Gratuito - Nenhum anúncio intrusivo</p>
        </div>

        {/* CTA Principal */}
        <div className="mb-16 text-center">
          <button 
            onClick={handleDownload}
            className="inline-flex items-center gap-3 text-lg px-8 py-4 mb-4 rounded-lg font-bold transition-all duration-300 uppercase tracking-wider bg-gradient-gaming text-black hover:shadow-lg hover:shadow-neon-green/50 hover:scale-105"
          >
            <span className="text-2xl">⬇️</span>
            <div className="text-left">
              <div>Baixar para seu Computador</div>
              <div className="text-sm opacity-90">Gratuito - Windows, Mac, Linux</div>
            </div>
          </button>
          <p className="text-neon-green font-semibold mt-4">👥 {downloadCount.toLocaleString()} downloads</p>
        </div>

        {/* Plataformas */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Escolha sua Plataforma</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((platform, i) => (
              <div
                key={i}
                onClick={handleDownload}
                className="p-6 rounded-2xl text-center bg-dark-card/70 backdrop-blur border border-neon-green/10 hover:scale-105 transition-all cursor-pointer border-t-4 border-t-neon-green hover:border-t-neon-yellow"
              >
                <div className="text-5xl mb-3">{platform.icon}</div>
                <h4 className="font-bold text-lg mb-2">{platform.name}</h4>
                <p className="text-gray-400 text-sm mb-1">{platform.description}</p>
                <p className="text-neon-green text-xs font-semibold mb-4">{platform.size}</p>
                <button className="w-full text-sm py-2 rounded-lg font-bold transition-all duration-300 uppercase tracking-wider bg-gradient-gaming text-black hover:shadow-lg hover:shadow-neon-green/50 hover:scale-105">Baixar</button>
              </div>
            ))}
          </div>
        </div>

        {/* Requisitos */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Requisitos Mínimos</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '💾', title: 'Armazenamento', desc: '250 MB de espaço livre' },
              { icon: '🖥️', title: 'Processador', desc: 'Dual Core 2.0 GHz' },
              { icon: '🧠', title: 'RAM', desc: '2 GB mínimo' }
            ].map((req, i) => (
              <div key={i} className="p-6 rounded-2xl text-center bg-dark-card/70 backdrop-blur border border-neon-green/10">
                <div className="text-4xl mb-3">{req.icon}</div>
                <h5 className="font-bold mb-2">{req.title}</h5>
                <p className="text-gray-300">{req.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
