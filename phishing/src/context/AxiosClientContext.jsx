import React from "react"
import Axios from "axios"
import { createContext, useContext, useState } from "react"

export const StateContext = createContext(null)

export const AxiosClientContext = ({ children }) => {
  const [axiosErrors, setAxiosErrors] = useState([])
  const axiosClient = Axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true
  })

  axiosClient.interceptors.request.use((res) => {
    return res
  }, (err) => {
    return Promise.reject(err)
  })

  axiosClient.interceptors.response.use(res => {
    return res
  }, (err) => {
    const { response } = err;
    console.log(response.data)
    setAxiosErrors([...axiosErrors, response.data])
  })
  return (
    <StateContext.Provider value={{
      axiosClient,
      axiosErrors
    }}>
      {children}
    </StateContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAxiosClientContext = () => useContext(StateContext);
