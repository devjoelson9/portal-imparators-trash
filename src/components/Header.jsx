import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import logo from "../assets/logo.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["features", "gameplay", "download"];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-950/80 backdrop-blur-md border-b border-white/5 shadow-lg"
          : "bg-gray-950/40"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          {/* LOGO */}
          <div className="flex items-center gap-3 cursor-pointer group">
            <img src={logo} alt="Trash Emperors Logo" className="w-45 h-45 object-contain"/>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="relative text-sm text-gray-400 hover:text-white transition group capitalize"
              >
                {item}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-green-400 to-cyan-400 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </nav>

          {/* CTA DESKTOP */}
          <div className="hidden md:block">
            <button className="flex items-center gap-2 px-5 py-2 rounded-lg bg-gradient-to-r from-green-400 to-cyan-400 text-black font-semibold hover:scale-105 transition shadow-md shadow-green-500/20">
              <Download size={16} />
              Download
            </button>
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 rounded-xl border border-white/5 bg-gray-950/90 backdrop-blur-md p-4 space-y-3 shadow-xl">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left text-gray-300 hover:text-white transition capitalize"
              >
                {item}
              </button>
            ))}

            <button className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-green-400 to-cyan-400 text-black font-semibold hover:scale-105 transition">
              <Download size={16} />
              Download
            </button>
          </div>
        )}
      </div>
    </header>
  );
}