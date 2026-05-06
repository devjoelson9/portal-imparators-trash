export default function Hero() {
  return (
    <section className="bg-gradient-dark relative overflow-hidden min-h-screen flex items-center">
      {/* Gradientes de fundo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-green/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-neon-blue/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Conteúdo */}
          <div className="space-y-6 md:space-y-8 animate-slideInUp" style={{animationDelay: '0.1s'}}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Torne-se um <span className="bg-gradient-gaming bg-clip-text text-transparent">Imperador do Lixo</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Um jogo arcade educativo que ensina reciclagem enquanto você se diverte. Controle um caminhão de lixo, desvie de obstáculos e colete diferentes tipos de resíduos para salvar o planeta!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold transition-all duration-300 uppercase tracking-wider text-sm bg-gradient-gaming text-black hover:shadow-lg hover:shadow-neon-green/50 hover:scale-105"
              >
                <span className="inline-block group-hover:translate-y-1 transition-transform">⬇️</span>
                <span>Baixar Agora</span>
              </button>
              <button className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold transition-all duration-300 uppercase tracking-wider text-sm bg-dark-card/70 backdrop-blur border-2 border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-black">
                <span>▶️</span>
                <span>Ver Trailer</span>
              </button>
            </div>
            
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {[
                { icon: '⭐', text: '4.8/5' },
                { icon: '👥', text: '50K+ Downloads' },
                { icon: '🎮', text: '100% Gratuito' }
              ].map((badge, i) => (
                <div key={i} className="px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium hover:scale-105 transition-transform bg-dark-card/70 backdrop-blur border border-neon-green/10">
                  <span className="text-lg">{badge.icon}</span>
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Visual */}
          <div className="relative h-96 sm:h-[500px] animate-float" style={{animationDelay: '0.2s'}}>
            <div className="relative w-full h-full">
              {/* Caminhão animado */}
              <div className="absolute bottom-24 left-1/2 -translate-x-1/2 animate-bounce" style={{animationDuration: '2s'}}>
                <div className="flex items-end gap-1" style={{filter: 'drop-shadow(0 0 20px rgba(15, 255, 80, 0.4))'}}>
                  <div className="w-10 h-16 bg-gradient-to-br from-neon-green to-green-600 rounded-t-lg" style={{boxShadow: '0 0 15px rgba(15, 255, 80, 0.6)'}} />
                  <div className="w-24 h-20 bg-gradient-to-br from-neon-blue to-purple-600 rounded-lg" style={{boxShadow: '0 0 20px rgba(0, 217, 255, 0.6)'}} />
                  {[0, 1].map((i) => (
                    <div 
                      key={i}
                      className="w-5 h-5 rounded-full bg-gradient-to-br from-neon-yellow to-yellow-600 animate-spin" 
                      style={{boxShadow: '0 0 10px rgba(255, 255, 0, 0.8)', animationDuration: '0.8s'}}
                    />
                  ))}
                </div>
              </div>
              
              {/* Lixo flutuante */}
              <div className="absolute inset-0 flex justify-between px-5 pt-5">
                {['📄', '🥫', '🍌', '🔵', '⚙️'].map((emoji, i) => (
                  <div 
                    key={i}
                    className="text-4xl animate-float"
                    style={{animationDelay: `${i * 0.6}s`, filter: 'drop-shadow(0 0 10px rgba(100, 200, 255, 0.3))'}}
                  >
                    {emoji}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
