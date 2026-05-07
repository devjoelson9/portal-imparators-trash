import {
  Gamepad2,
  Truck,
  ShieldAlert,
  Recycle,
  TrendingUp,
  BarChart3,
  Globe,
  Trophy,
  Layers,
  WifiOff
} from "lucide-react";

export default function Gameplay() {
  const steps = [
    {
      number: "1",
      title: "Controle seu Caminhão",
      icon: <Truck size={28} />,
      description:
        "Use teclado ou toque para dirigir pelas ruas e iniciar sua coleta.",
    },
    {
      number: "2",
      title: "Desvie de Obstáculos",
      icon: <ShieldAlert size={28} />,
      description:
        "Evite perigos como carros e buracos enquanto coleta resíduos.",
    },
    {
      number: "3",
      title: "Colete o Lixo Certo",
      icon: <Recycle size={28} />,
      description:
        "Separe corretamente os resíduos para ganhar mais pontos.",
    },
    {
      number: "4",
      title: "Suba de Nível",
      icon: <TrendingUp size={28} />,
      description:
        "Quanto mais você joga, mais difícil e recompensador fica.",
    },
  ];

  return (
    <section id="gameplay" className="relative py-24 overflow-hidden">
      
      {/* BACKGROUND */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px]  rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px]  rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Como{" "}
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Jogar
            </span>
          </h2>

          <p className="text-gray-400 text-lg">
            Domine o arcade da sustentabilidade
          </p>
        </div>

        {/* STEPS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step) => (
            <div
              key={step.number}
              className="p-6 rounded-2xl bg-gray-900 border border-gray-800 hover:border-green-400/40 transition hover:shadow-lg hover:shadow-green-500/10"
            >
              <div className="text-green-400 mb-4">{step.icon}</div>

              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-green-400 to-cyan-400 text-black font-bold mb-3">
                {step.number}
              </div>

              <h3 className="text-white font-semibold mb-2">
                {step.title}
              </h3>

              <p className="text-gray-400 text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* FEATURES */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              icon: <Gamepad2 size={24} />,
              title: "Controles Intuitivos",
              desc: "Fácil de jogar para qualquer pessoa.",
            },
            {
              icon: <BarChart3 size={24} />,
              title: "Modo Desafio",
              desc: "Aumente a dificuldade e teste suas habilidades.",
            },
            {
              icon: <Globe size={24} />,
              title: "Educativo",
              desc: "Aprenda reciclagem enquanto joga.",
            },
            {
              icon: <Trophy size={24} />,
              title: "Ranking",
              desc: "Compita com amigos e suba no ranking.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-gray-900 border border-gray-800 hover:border-green-400/40 transition hover:scale-105"
            >
              <div className="text-green-400 mb-3">{item.icon}</div>

              <h4 className="text-white font-semibold mb-2">
                {item.title}
              </h4>

              <p className="text-gray-400 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* STATS */}
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { value: "100+", label: "Níveis", icon: <Layers size={20} /> },
            { value: "5", label: "Tipos de Resíduos", icon: <Recycle size={20} /> },
            { value: "∞", label: "Mapas", icon: <Globe size={20} /> },
            { value: "Offline", label: "Modo Offline", icon: <WifiOff size={20} /> },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-gray-900 border border-gray-800 text-center hover:border-green-400/40 transition"
            >
              <div className="text-green-400 flex justify-center mb-2">
                {stat.icon}
              </div>

              <div className="text-3xl font-bold text-white mb-1">
                {stat.value}
              </div>

              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}