import { Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Skills from './pages/Skills'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Navbar/About" element={<About />} />
        <Route path="/Navbar/Projects" element={<Projects />} />
        <Route path="/Navbar/Skills" element={<Skills />} />
      </Routes>
    </>
  )
}

export default App
