export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">

        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-sm text-gray-500 tracking-wide">
            © {currentYear} Trash Emperors. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/5 bg-white/[0.03] backdrop-blur-sm">
            <span className="text-green-400">🌱</span>

            <span className="text-sm text-gray-300 font-medium">
              Sustentabilidade em foco
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
}