import { useState } from 'react'

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(0)

  const features = [
    {
      id: 0,
      emoji: '📄',
      name: 'Papel',
      color: 'from-amber-600 to-amber-800',
      description: 'Colete jornais, revistas e papelão. Aprenda sobre a importância da reciclagem de papel para preservar florestas.',
      points: 100
    },
    {
      id: 1,
      emoji: '🔵',
      name: 'Vidro',
      color: 'from-blue-400 to-blue-600',
      description: 'Recolha garrafas e frascos de vidro. O vidro pode ser reciclado infinitamente sem perder qualidade!',
      points: 150
    },
    {
      id: 2,
      emoji: '🥫',
      name: 'Metal',
      color: 'from-gray-400 to-gray-600',
      description: 'Colete latas e objetos metálicos. A reciclagem de metais economiza 95% da energia necessária para criar novos.',
      points: 120
    },
    {
      id: 3,
      emoji: '🟢',
      name: 'Plástico',
      color: 'from-green-400 to-green-600',
      description: 'Recolha garrafas plásticas e embalagens. Cada peça de plástico reciclado reduz a poluição dos oceanos.',
      points: 80
    },
    {
      id: 4,
      emoji: '🍌',
      name: 'Orgânico',
      color: 'from-orange-600 to-orange-800',
      description: 'Colete resíduos de alimentos. Esses materiais podem ser transformados em adubo e energia!',
      points: 90
    }
  ]

  return (
    <section id="features" className="py-20 sm:py-32 px-4 relative overflow-hidden">
      {/* Fundo com gradiente */}
      <div className="absolute inset-0 bg-gradient-dark pointer-events-none" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-neon-green/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-gaming bg-clip-text text-transparent">Tipos de Resíduos</h2>
          <p className="text-gray-300 text-lg">Aprenda sobre cada tipo de lixo enquanto joga</p>
        </div>

        {/* Grid de Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {features.map((feature) => (
            <div
              key={feature.id}
              onClick={() => setActiveFeature(feature.id)}
              className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 transform hover:scale-105 bg-dark-card/70 backdrop-blur border border-neon-green/10 ${
                activeFeature === feature.id ? 'ring-2 ring-neon-green shadow-lg shadow-neon-green/50' : ''
              }`}
            >
              <div className="text-5xl mb-3">{feature.emoji}</div>
              <h3 className="font-bold text-xl mb-2">{feature.name}</h3>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-neon-green">+{feature.points} pts</span>
                <span className="text-lg">→</span>
              </div>
              {activeFeature === feature.id && (
                <p className="text-sm text-gray-300 mt-3 pt-3 border-t border-neon-green/30">{feature.description}</p>
              )}
            </div>
          ))}
        </div>

        {/* Info Boxes */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            { icon: '🎯', title: 'Objetivos', desc: 'Seu objetivo é coletar diferentes tipos de resíduos e aprender como separar o lixo corretamente para salvar o planeta.' },
            { icon: '🏆', title: 'Pontuação', desc: 'Quanto mais material você coleta corretamente, mais pontos acumula! Desafie seus amigos e suba no ranking.' },
            { icon: '⚡', title: 'Power-ups', desc: 'Desbloqueie power-ups especiais para multiplicar pontos, proteger seu caminhão e muito mais!' }
          ].map((box, i) => (
            <div key={i} className="p-8 rounded-2xl bg-dark-card/70 backdrop-blur hover:border-neon-green/50 border border-neon-green/20 transition-all hover:shadow-lg hover:shadow-neon-green/30">
              <div className="text-4xl mb-3">{box.icon}</div>
              <h4 className="font-bold text-lg mb-2">{box.title}</h4>
              <p className="text-gray-300 text-sm">{box.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
