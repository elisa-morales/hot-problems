import axios from "axios"

axios.defaults.baseURL = import.meta.env.VITE_API_URL

const clientApi = async (id) => {
  try {
    const response = await axios.get(`${id}-api`)
    return response
  } catch (error) {
    console.log(error)
  }
}

export default clientApi
