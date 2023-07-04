import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import clientApi from "./services/clientApi"
import Layout from "./components/Layout/Layout"
import Home from "./pages/Home"
import Section from "./pages/Section"

const loader = async ({ params }) => {
  return clientApi(params.id)
}

const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout />}>
<Route path="/" element={<Home />} />
<Route path="/:id" element={<Section />} loader={loader} />
</Route>))

function App() {
  return <RouterProvider router={router} />
}

export default App

// <Route path="/temperature" element={<Temperature />} />

// const router = createBrowserRouter(createRoutesFromElements(<Route path="/" element={<Home />} loader={dashboardLoader} />))
