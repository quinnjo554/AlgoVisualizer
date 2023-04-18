import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/NavBar'
import Sort from './Components/Sort'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import MainPage from './Components/MainPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <NavBar></NavBar>
        <Router>
          <Routes>
            <Route path="/" element={<MainPage/>} />
            <Route path="/bubblesort" element={<Sort sortType={"Bubble"} />} />
            <Route path="/quicksort" element={<Sort sortType={"Quick"} />} />
          </Routes>
        </Router>
    </div>
  )
}

export default App
