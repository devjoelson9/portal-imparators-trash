import { Download, Play, Star, Users, Gamepad2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      
      {/* Glow background */}

      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* TEXTO */}
        <div className="space-y-8">
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Torne-se um{" "}<br/>
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Trash Emperors
            </span>
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
            Um jogo arcade educativo onde você dirige um caminhão de lixo,
            coleta resíduos e aprende reciclagem enquanto se diverte.
          </p>

          {/* BOTÕES */}
          <div className="flex flex-wrap gap-4">
            
            <button className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-green-400 to-cyan-400 text-black hover:scale-105 transition-all shadow-lg shadow-green-500/20">
              <Download size={18} />
              Baixar Agora
            </button>

            <button className="flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-700 text-gray-300 hover:bg-gray-800 transition-all">
              <Play size={18} />
              Ver Trailer
            </button>
          </div>

          {/* BADGES */}
          <div className="flex flex-wrap gap-4 pt-4">
            
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-full text-sm">
              <Star size={16} className="text-yellow-400" />
              4.8/5
            </div>

            <div className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-full text-sm">
              <Users size={16} className="text-blue-400" />
              50K+ jogadores
            </div>

            <div className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-full text-sm">
              <Gamepad2 size={16} className="text-green-400" />
              100% gratuito
            </div>

          </div>
        </div>

        {/* VISUAL */}
        <div className="relative h-[450px] flex items-center justify-center">

          {/* Glow de fundo */}
          <div className="absolute w-[320px] h-[420px] bg-green-500/10 blur-3xl rounded-full animate-pulse" />
          <div className="absolute w-[280px] h-[380px] bg-cyan-500/10 blur-2xl rounded-full animate-pulse" />

          {/* CARD */}
          <div className="relative w-[320px] h-[420px] rounded-3xl border border-white/10 
                          bg-gradient-to-b from-gray-900/90 to-gray-950/90 
                          backdrop-blur-xl shadow-2xl overflow-hidden
                          hover:scale-[1.03] transition-all duration-300">

            {/* topo HUD */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
              <div className="flex gap-2 items-center">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-gray-400 tracking-widest">LIVE RUN</span>
              </div>

              <div className="text-xs text-gray-400">Trash Emperors</div>
            </div>

            {/* área principal */}
            <div className="flex-1 flex flex-col items-center justify-center relative mt-22">

              {/* scanner line efeito jogo */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-400/5 to-transparent animate-pulse" />

              {/* caminhão */}
              <div className="text-7xl drop-shadow-[0_0_20px_rgba(34,197,94,0.6)] animate-bounce z-10">
                🚛
              </div>

              {/* partículas fake */}
              <div className="absolute top-10 left-10 text-green-400/40 animate-ping">●</div>
              <div className="absolute bottom-12 right-12 text-cyan-400/40 animate-ping">●</div>
              <div className="absolute top-20 right-14 text-green-300/30 animate-ping">●</div>
            </div>

            {/* status bar estilo game */}
            <div className="px-4 pb-4 space-y-3">

              {/* XP BAR */}
              <div>
                <div className="flex justify-between text-[10px] text-gray-400 mb-1">
                  <span>XP</span>
                  <span>72%</span>
                </div>

                <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full w-[72%] bg-gradient-to-r from-green-400 to-cyan-400 animate-pulse" />
                </div>
              </div>

              {/* stats */}
              <div className="flex justify-between text-xs text-gray-400">
                <span>Score: <b className="text-white">1200</b></span>
                <span>Level: <b className="text-green-400">03</b></span>
                <span>Combo: <b className="text-cyan-400">x2</b></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}