import { useState } from 'react'
import { Navbar } from './components/navbar'
import { About } from './components/About'
import { AboutMe } from './components/AboutMe'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <About/>
    <AboutMe/>
    </>
  )
}

export default App
