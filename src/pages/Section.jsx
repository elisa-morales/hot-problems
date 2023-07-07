import { Suspense, lazy } from "react"
import { Await, useLoaderData, useParams } from "react-router-dom"
import ClipLoader from "react-spinners/ClipLoader"
import Paragraph from "../components/Paragraph/Paragraph"
const LineChart = lazy(() => import("../components/LineChart/LineChart"))

const Section = () => {
  const { id } = useParams()
  const { data } = useLoaderData()

  const override = {
    position: "fixed",
    top: "50%",
    left: "50%",
  }

  return (
    <div className="page-wrapper">
      <Paragraph key={id} id={id} />
      <Suspense fallback={<ClipLoader color="#DD7D3B" cssOverride={override} />}>
        <Await resolve={data} errorElement="errore bla">
          {(data) => <LineChart key={id} id={id} data={data.result || data.co2 || data.methane || data.nitrous || data.arcticData} />}
        </Await>
      </Suspense>
    </div>
  )
}

export default Section
