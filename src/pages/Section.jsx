import { Suspense } from "react"
import { Await, useLoaderData, useParams } from "react-router-dom"
import LineChart from "../components/LineChart/LineChart"

const Section = () => {
  const { id } = useParams()
  const { data } = useLoaderData()

  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
      <Await resolve={data} errorElement="errore bla">
      {data => 
      <LineChart 
      key={id}
      id={id}
      data={
        data.result || data.co2 || data.methane || data.nitrous || data.arcticData
      }
      />}
      </Await>
      </Suspense>
    </>
  )
}

export default Section