export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-dark border-t border-neon-green/20 pt-16 sm:pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Sobre */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-gaming rounded-lg flex items-center justify-center">
                <span>♻️</span>
              </div>
              <h4 className="font-bold text-lg bg-gradient-gaming bg-clip-text text-transparent">TRASH EMPERORS</h4>
            </div>
            <p className="text-gray-300 text-sm mb-4">Um jogo educativo que torna a reciclagem divertida e acessível para todos.</p>
            <div className="flex gap-3">
              {['📘', '𝕏', '📷', '🎮'].map((icon, i) => (
                <a key={i} href="#" className="w-8 h-8 rounded-lg flex items-center justify-center hover:scale-110 transition-transform text-sm bg-dark-card/70 backdrop-blur border border-neon-green/10">
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Úteis */}
          <div>
            <h5 className="font-bold mb-4">Links Úteis</h5>
            <ul className="space-y-2 text-gray-300 text-sm">
              {['Recursos', 'Gameplay', 'Download', 'Comunidade', 'Bugs'].map((link, i) => (
                <li key={i}><a href="#" className="hover:text-neon-green transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          {/* Suporte */}
          <div>
            <h5 className="font-bold mb-4">Suporte</h5>
            <ul className="space-y-2 text-gray-300 text-sm">
              {['FAQ', 'Controles', 'Dicas', 'Contato', 'Reporte'].map((link, i) => (
                <li key={i}><a href="#" className="hover:text-neon-green transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h5 className="font-bold mb-4">Legal</h5>
            <ul className="space-y-2 text-gray-300 text-sm">
              {['Termos', 'Privacidade', 'Cookies', 'Créditos', 'Licenças'].map((link, i) => (
                <li key={i}><a href="#" className="hover:text-neon-green transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divisor */}
        <div className="border-t border-neon-green/20 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">&copy; {currentYear} Trash Emperors. Feito com 💚 para o planeta.</p>
          <div className="px-4 py-2 rounded-full text-sm font-medium bg-dark-card/70 backdrop-blur border border-neon-green/10">
            🌍 Jogo Educativo Sustentável
          </div>
        </div>
      </div>
    </footer>
  )
}
