import { useState } from "react";
import {
  Download,
  Monitor,
  Apple,
  Smartphone,
  HardDrive,
  Terminal,
  Cpu,
  MemoryStick,
  Users
} from "lucide-react";

export default function DownloadSection() {
  const [downloadCount, setDownloadCount] = useState(50000);

  const platforms = [
    {
      icon: <Monitor size={28} />,
      name: "Windows",
      description: "Windows 10 ou superior",
      size: "245 MB",
    },
    {
      icon: <Apple size={28} />,
      name: "macOS",
      description: "macOS 10.15 ou superior",
      size: "198 MB",
    },
    {
      icon: <Terminal size={28} />,
      name: "Linux",
      description: "Ubuntu 18.04+",
      size: "220 MB",
    },
    {
      icon: <Smartphone size={28} />,
      name: "Mobile",
      description: "iOS & Android",
      size: "156 MB",
    },
  ];

  const handleDownload = () => {
    setDownloadCount((prev) => prev + 1);
  };

  return (
    <section id="download" className="relative py-24  overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Comece a Jogar{" "}
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Agora
            </span>
          </h2>

          <p className="text-gray-400 text-lg">
            100% gratuito • Sem anúncios intrusivos
          </p>
        </div>

        {/* CTA PRINCIPAL */}
        <div className="text-center mb-16">
          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl font-semibold text-black bg-gradient-to-r from-green-400 to-cyan-400 hover:scale-105 transition shadow-lg shadow-green-500/20"
          >
            <Download size={22} />
            <div className="text-left">
              <div className="text-lg">Baixar para Desktop</div>
              <div className="text-sm opacity-80">
                Windows • macOS • Linux
              </div>
            </div>
          </button>

          <div className="flex items-center justify-center gap-2 mt-4 text-gray-400 text-sm">
            <Users size={16} />
            {downloadCount.toLocaleString()} downloads
          </div>
        </div>

        {/* PLATAFORMAS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {platforms.map((platform, i) => (
            <div
              key={i}
              onClick={handleDownload}
              className="p-6 rounded-2xl bg-gray-900 border border-gray-800 hover:border-green-400/40 transition hover:scale-105 cursor-pointer"
            >
              <div className="text-green-400 mb-4">{platform.icon}</div>

              <h4 className="text-white font-semibold mb-1">
                {platform.name}
              </h4>

              <p className="text-gray-400 text-sm mb-2">
                {platform.description}
              </p>

              <p className="text-green-400 text-xs font-semibold mb-4">
                {platform.size}
              </p>

              <button className="w-full py-2 rounded-xl bg-gradient-to-r from-green-400 to-cyan-400 text-black text-sm font-semibold hover:scale-105 transition">
                Baixar
              </button>
            </div>
          ))}
        </div>

        {/* REQUISITOS */}
        

      </div>
    </section>
  );
}