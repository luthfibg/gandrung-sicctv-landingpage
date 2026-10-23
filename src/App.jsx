import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AIStrip from './components/AIStrip'
import Products from './components/Products'
import Stats from './components/Stats'
import Features from './components/Features'
import Security from './components/Security'
import Specs from './components/Specs'
import UseCases from './components/UseCases'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  // Tab spesifikasi dikendalikan di sini agar tombol "Lihat spesifikasi" di kartu produk bisa memilihnya.
  const [specTab, setSpecTab] = useState('sg50')

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AIStrip />
        <Products onSelectSpec={setSpecTab} />
        <Stats />
        <Features />
        <Security />
        <Specs value={specTab} onChange={setSpecTab} />
        <UseCases />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
