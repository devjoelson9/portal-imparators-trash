export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" border-t border-gray-800 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid md:grid-cols-4 gap-10 mb-16">

          {/* LOGO */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-green-400 to-cyan-400 flex items-center justify-center text-black font-bold">
                TE
              </div>
              <h4 className="text-white font-bold text-xl">
                Trash Emperors
              </h4>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              Um jogo educativo que transforma reciclagem em diversão.
              Aprenda enquanto joga e ajude a salvar o planeta 🌍
            </p>
          </div>

          {/* PRODUTO */}
          <div>
            <h5 className="text-white font-semibold mb-4">Produto</h5>
            <ul className="space-y-2 text-gray-400 text-sm">
              {["Recursos", "Gameplay", "Download", "Atualizações"].map((item) => (
                <li key={item}>
                  <a className="hover:text-white transition">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* SUPORTE */}
          <div>
            <h5 className="text-white font-semibold mb-4">Suporte</h5>
            <ul className="space-y-2 text-gray-400 text-sm">
              {["FAQ", "Contato", "Dicas", "Reportar Bug"].map((item) => (
                <li key={item}>
                  <a className="hover:text-white transition">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h5 className="text-white font-semibold mb-4">
              Receba novidades
            </h5>

            <p className="text-gray-400 text-sm mb-4">
              Fique por dentro de atualizações e novidades do jogo.
            </p>

            <div className="flex items-center bg-gray-800 rounded-xl p-2">
              <input
                type="email"
                placeholder="Seu email"
                className="bg-transparent outline-none px-2 text-sm flex-1 text-white"
              />
              <button className="px-4 py-2 bg-gradient-to-r from-green-400 to-cyan-400 text-black text-sm font-semibold rounded-lg hover:scale-105 transition">
                Enviar
              </button>
            </div>
          </div>

        </div>

        {/* FOOTER FINAL */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 text-sm">
            © {currentYear} Trash Emperors. Todos os direitos reservados.
          </p>

          <div className="text-gray-400 text-sm">
            🌱 Sustentabilidade em foco
          </div>
        </div>

      </div>
    </footer>
  );
}