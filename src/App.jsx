import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom"
import clientApi from "./services/clientApi"
import Layout from "./components/Layout/Layout"
import Home from "./pages/Home"
import Section from "./pages/Section"
import Error from "./pages/Error"

const loader = async ({ params }) => {
  return clientApi(params.id)
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route
        path="/:id"
        element={<Section />}
        loader={loader}
        errorElement={
          <Error message="No data received. Please reload the page or come back later." />
        }
      />
      <Route
        path="*"
        element={
          <Error message="Sorry, the page you were looking for was not found." />
        }
      />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
