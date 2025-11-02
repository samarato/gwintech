
import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CookieConsent from './components/CookieConsent'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Features />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  )
}

export default App 