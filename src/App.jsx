import { useState } from 'react'
import { About } from './components/About'
import { AboutMe } from './components/AboutMe'
import { Navbar } from './components/navbar'

import { Skills } from './components/Skills'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <About/>
    <AboutMe/>
    <Skills/>
    <div className="bubbles">
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
        </div>
    </>
  )
}

export default App
