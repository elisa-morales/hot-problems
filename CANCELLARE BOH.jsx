import { useLoaderData } from "react-router-dom"
import clientApi from "../../services/clientApi"
import Sidebar from "../../components/Sidebar/Sidebar"
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js"
import { Line } from "react-chartjs-2"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
}

export const loader = async () => {
  return clientApi("temperature-api")
}

const Home = () => {
  const data = useLoaderData()

  const dataGraph = {
    labels: data.result.map((data) => data.time),
    datasets: [
      {
        label: "CO2",
        data: data.result.map((data) => data.land),
        borderColor: "#7CBDE1",
      },
    ],
  }

  return (
    <div className="container-dash">
      <Sidebar />
      <div className="prova">
        <h1>Home</h1>
        <Line options={options} data={dataGraph} />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur dolores error pariatur neque odio facilis laudantium iste cum temporibus obcaecati, incidunt assumenda, aperiam culpa explicabo vero sunt esse cumque alias.</p>
      </div>
    </div>
  )
}
