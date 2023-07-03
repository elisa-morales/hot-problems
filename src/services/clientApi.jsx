import axios from "axios"

const fetchData = axios.create({
  baseURL: "https://global-warming.org/api/",
})

const clientApi = async (url) => {
  try {
    const response = await fetchData.get(url)
    return response.data
  } catch (error) {
    console.log(`Something went wrong: ${error}`)
  }
}

export default clientApi
