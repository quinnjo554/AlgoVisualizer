import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './NavBar'
import Sort from './Sort'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <NavBar></NavBar>
        <Sort></Sort>
    </div>
  )
}

export default App
