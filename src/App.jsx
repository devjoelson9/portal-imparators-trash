import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Gameplay from './components/Gameplay'
import Download from './components/Download'
import Footer from './components/Footer'

function App() {
  return (
    <div className="relative min-h-screen bg-gray-950 text-white overflow-hidden">

      {/* BACKGROUND GLOBAL */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-green-500/30 blur-[150px] rounded-full" />
        
        <div className="absolute bottom-[-200px] right-[-150px] w-[700px] h-[700px] bg-cyan-500/30 blur-[150px] rounded-full" />
      </div>

      {/* CONTEÚDO */}
      <Header />
      <Hero />
      <Features />
      <Gameplay />
      <Download />
      <Footer />
    </div>
  );
}

export default App
