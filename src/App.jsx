import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home"
import Lineup from "./pages/lineup/Lineup"

function App() {
  return (
    <Router basename="/home">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lineup" element={<Lineup />} />
      </Routes>
    </Router>
  )
}

export default App
