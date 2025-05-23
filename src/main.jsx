import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Styles
import './assets/styles/index.css'

// Pages
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'
import Error from './pages/Error.jsx'

// Components
import Navbar from './components/navbar.jsx'
import Header from './components/header.jsx'

// Structured data
const structuredData = {
  "@context": "https://schema.org/",
    "@type": "Person",
    "name": "Poignant Julie",
    "url": "https://portfolio-julie-poignant.onrender.com/",
    "telephone": "06 44 79 58 62",
    "image": "",
    "sameAs": [
      "https://www.linkedin.com/in/julie-poignant/",
      "https://github.com/StrangePlatypus?tab=repositories"
    ],
    "jobTitle": "Développeur web"
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <script type='application/ld+json' dangerouslySetInnerHTML={{
      __html: JSON.stringify(structuredData),
    }} />
    <Header />
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/a-propos' element={<About />} />
        <Route path='/projets' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Error />}/>
      </Routes>
    </Router>
  </React.StrictMode>,
)
