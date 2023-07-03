import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import Temperature from "./pages/Temperature/Temperature"

const router = createBrowserRouter(createRoutesFromElements(<Route path="/" element={<Home />} />))

function App() {
  return <RouterProvider router={router} />
}

export default App

// <Route path="/temperature" element={<Temperature />} />

// const router = createBrowserRouter(createRoutesFromElements(<Route path="/" element={<Home />} loader={dashboardLoader} />))
