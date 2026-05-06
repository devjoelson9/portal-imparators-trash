export default function Gameplay() {
  const steps = [
    {
      number: '1',
      title: 'Controle seu Caminhão',
      icon: '🎮',
      description: 'Use as setas do teclado ou toques na tela para controlar seu caminhão de lixo pelas ruas.'
    },
    {
      number: '2',
      title: 'Desvie de Obstáculos',
      icon: '🚧',
      description: 'Evite carros, bueiros e outros obstáculos enquanto coleta resíduos pelas ruas.'
    },
    {
      number: '3',
      title: 'Colete o Lixo Certo',
      icon: '♻️',
      description: 'Pegue os itens corretos que correspondem aos tipos de resíduos para ganhar pontos.'
    },
    {
      number: '4',
      title: 'Suba de Nível',
      icon: '⬆️',
      description: 'Quanto mais você coleta, mais o jogo fica desafiador e recompensador!'
    }
  ]

  return (
    <section id="gameplay" className="py-20 sm:py-32 px-4 bg-gradient-dark relative overflow-hidden">
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-neon-blue/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-gaming bg-clip-text text-transparent">Como Jogar</h2>
          <p className="text-gray-300 text-lg">Dominem o arcade da sustentabilidade</p>
        </div>

        {/* Passos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step) => (
            <div key={step.number} className="p-6 rounded-2xl text-center bg-dark-card/70 backdrop-blur hover:border-neon-green/50 border border-neon-green/20 transition-all group">
              <div className="flex items-center justify-center mb-4">
                <span className="text-5xl group-hover:scale-110 transition-transform">{step.icon}</span>
              </div>
              <div className="w-12 h-12 rounded-full bg-gradient-gaming flex items-center justify-center font-bold text-lg text-black mx-auto mb-3">
                {step.number}
              </div>
              <h3 className="font-bold text-lg mb-2">{step.title}</h3>
              <p className="text-gray-300 text-sm">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { emoji: '🎮', title: 'Controles Intuitivos', desc: 'Perfeito para jogadores de todas as idades' },
            { emoji: '📊', title: 'Modo Desafio', desc: 'Aumente a dificuldade e teste seus limites' },
            { emoji: '🌍', title: 'Educativo', desc: 'Aprenda sobre reciclagem enquanto se diverte' },
            { emoji: '🏅', title: 'Sistema de Ranking', desc: 'Compita com amigos e subir no placar' }
          ].map((feature, i) => (
            <div key={i} className="p-6 rounded-2xl text-center bg-dark-card/70 backdrop-blur border border-neon-green/10 hover:scale-105 transition-transform">
              <div className="text-4xl mb-3">{feature.emoji}</div>
              <h4 className="font-bold mb-2">{feature.title}</h4>
              <p className="text-gray-400 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { number: '100+', label: 'Níveis' },
            { number: '5', label: 'Tipos de Resíduos' },
            { number: '∞', label: 'Mapas' },
            { number: '📴', label: 'Modo Offline' }
          ].map((stat, i) => (
            <div key={i} className="p-8 rounded-2xl text-center bg-dark-card/70 backdrop-blur border border-neon-green/20 hover:border-neon-green/50 transition-all">
              <div className="text-5xl font-bold bg-gradient-gaming bg-clip-text text-transparent mb-2">{stat.number}</div>
              <p className="text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
