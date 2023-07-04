import axios from "axios"

axios.defaults.baseURL = "https://global-warming.org/api/"

const clientApi = async (id) => {
  try {
    const response = await axios.get(`${id}-api`)
    return response
  } catch (error) {
    console.log(`Something went wrong: ${error}`)
  }
}

export default clientApi