import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import Temperature from "./pages/Temperature/Temperature"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/temperature" element={<Temperature />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
