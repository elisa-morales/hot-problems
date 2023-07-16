import axios from "axios"

const url = import.meta.env.VITE_API_URL
axios.defaults.baseURL = url

const clientApi = async (id) => {
  try {
    const response = await axios.get(`${id}-api`)
    return response
  } catch (error) {
    console.log(error)
  }
}

export default clientApi
