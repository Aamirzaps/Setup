import axios from "axios"

export const api = axios.create({
  baseURL: "https://api.example.com",
})

api.interceptors.request.use((config) => {
  // add token here
  return config
})