import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Gameplay from './components/Gameplay'
import Download from './components/Download'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-dark text-white flex flex-col overflow-x-hidden">
      <Header />
      <Hero />
      <Features />
      <Gameplay />
      <Download />
      <Footer />
    </div>
  )
}

export default App
