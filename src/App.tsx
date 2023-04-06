import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/NavBar'
import BubbleHero from './Components/BubbleSort'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <NavBar></NavBar>
        <BubbleHero></BubbleHero>
    </div>
  )
}

export default App
