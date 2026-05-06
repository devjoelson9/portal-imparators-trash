import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-dark-card/70 backdrop-blur border-b border-neon-green/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 bg-gradient-gaming rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg shadow-neon-green/40">
              <span className="text-xl">♻️👑</span>
            </div>
            <span className="bg-gradient-gaming bg-clip-text text-transparent font-bold text-xl sm:text-2xl">TRASH EMPERORS</span>
          </div>

          {/* Menu Desktop */}
          <nav className="hidden md:flex gap-8">
            {['Features', 'Gameplay', 'Download'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-white font-medium hover:text-neon-green transition-colors relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-gaming group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>

          {/* Menu Mobile Toggle */}
          <button 
            className="md:hidden text-neon-green text-2xl hover:text-neon-yellow transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>

          {/* CTA Button Desktop */}
          <button className="hidden sm:block px-6 py-3 rounded-lg font-bold transition-all duration-300 uppercase tracking-wider text-sm bg-gradient-gaming text-black hover:shadow-lg hover:shadow-neon-green/50 hover:scale-105">
            Download Now
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-3 animate-slideInDown">
            {['Features', 'Gameplay', 'Download'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left text-white hover:text-neon-green transition-colors py-2 font-medium"
              >
                {item}
              </button>
            ))}
            <button className="w-full px-6 py-3 rounded-lg font-bold transition-all duration-300 uppercase tracking-wider text-sm bg-gradient-gaming text-black hover:shadow-lg hover:shadow-neon-green/50 hover:scale-105">Download Now</button>
          </div>
        )}
      </div>
    </header>
  )
}
