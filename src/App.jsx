import React from 'react'
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/about/About'
import Work from './components/work/Work'
import Certifications from './components/certifications/Certifications'
import Footer from './components/footer/Footer'
import ScrollUp from './components/scrollup/ScrollUp'
import Qualification from './components/qualification/Qualification'

function App() {
  return (
    <>
      <Header />

      <main className='main'>
        <Home />
        <About />
        <Work />
        <Qualification />
        <Certifications />
      </main>

      <Footer />
      <ScrollUp />
    </>
  )
}

export default App
