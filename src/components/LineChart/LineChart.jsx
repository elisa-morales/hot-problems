import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js"
import { Line } from "react-chartjs-2"
import "./LineChart.css"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export const options = {
  responsive: true,
  layout: {
    padding: {
        top: 15,
        left: 15,
        right: 15,
        bottom: 15
    },
  },
  plugins: {
    legend: {
      position: "top",
      labels: {
        boxWidth: 6,
        boxHeight: 6,
    },
    },
  },
}

const LineChart = ({data, id}) => {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

  const dataGraph = {
    labels: data?.map((data) => data.time || data.year || data.date),
    datasets: [
      {
        label: id === "co2" ? "CO2" :
        id === "nitrous-oxide" ? "N2O" :
        id === "arctic" ? "Extent" :
        capitalizeFirstLetter(id),
        data: data?.map((data) => data.land || data.trend || data.extent),
        fill: false,
        pointRadius: 1,
        borderColor: "#c4a8ff",
      },
    ],
  }
  return (
      <Line className="chart" options={options} data={dataGraph} />
  )
}

export default LineChart