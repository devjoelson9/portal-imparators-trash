import { useState } from "react";
import { FileText, GlassWater, Package, Leaf, Apple, Target, Trophy, Zap } from "lucide-react";

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      id: 0,
      icon: <FileText size={28} />,
      name: "Papel",
      description:
        "Colete jornais, revistas e papelão. Preserve florestas através da reciclagem.",
      points: 100,
    },
    {
      id: 1,
      icon: <GlassWater size={28} />,
      name: "Vidro",
      description:
        "Garrafas e frascos podem ser reciclados infinitamente sem perder qualidade.",
      points: 150,
    },
    {
      id: 2,
      icon: <Package size={28} />,
      name: "Metal",
      description:
        "Economize até 95% de energia ao reciclar metais.",
      points: 120,
    },
    {
      id: 3,
      icon: <Leaf size={28} />,
      name: "Plástico",
      description:
        "Reduza a poluição dos oceanos reciclando plásticos corretamente.",
      points: 80,
    },
    {
      id: 4,
      icon: <Apple size={28} />,
      name: "Orgânico",
      description:
        "Transforme resíduos em energia e adubo natural.",
      points: 90,
    },
  ];

  return (
    <section id="features" className="relative py-24 overflow-hidden">
      
      {/* BACKGROUND */}

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Tipos de{" "}
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Resíduos
            </span>
          </h2>

          <p className="text-gray-400 text-lg">
            Aprenda reciclagem enquanto joga
          </p>
        </div>

        {/* FEATURES */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {features.map((feature) => (
            <div
              key={feature.id}
              onClick={() => setActiveFeature(feature.id)}
              className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${
                activeFeature === feature.id
                  ? "border-green-400 bg-gray-900 shadow-lg shadow-green-500/20 scale-105"
                  : "border-gray-800 bg-gray-900 hover:border-gray-700"
              }`}
            >
              <div className="mb-4 text-green-400">
                {feature.icon}
              </div>

              <h3 className="text-white font-semibold text-lg mb-2">
                {feature.name}
              </h3>

              <p className="text-xs text-green-400 font-semibold mb-2">
                +{feature.points} pts
              </p>

              {activeFeature === feature.id && (
                <p className="text-sm text-gray-400 mt-3 border-t border-gray-800 pt-3">
                  {feature.description}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* INFO CARDS */}
        <div className="grid md:grid-cols-3 gap-6">

          {[
            {
              icon: <Target size={28} />,
              title: "Objetivo",
              desc: "Colete resíduos e aprenda a separar o lixo corretamente.",
            },
            {
              icon: <Trophy size={28} />,
              title: "Pontuação",
              desc: "Ganhe pontos e suba no ranking com seus amigos.",
            },
            {
              icon: <Zap size={28} />,
              title: "Power-ups",
              desc: "Desbloqueie habilidades para aumentar sua performance.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-gray-900 border border-gray-800 hover:border-green-400/40 transition hover:shadow-lg hover:shadow-green-500/10"
            >
              <div className="text-green-400 mb-4">{item.icon}</div>

              <h4 className="text-white font-semibold mb-2">
                {item.title}
              </h4>

              <p className="text-gray-400 text-sm">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}