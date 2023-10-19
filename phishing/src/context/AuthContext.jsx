import React, { createContext, useContext } from "react";
import { useState } from "react";
export const StateContext = createContext(null)
import Axios from "axios"
Axios.defaults.baseURL = import.meta.env.VITE_API_URL

export const AuthContext = ({ children }) => {
  const [registerModalOpen, setRegisterModalOpen] = useState(false)
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [authErrors, setAuthErrors] = useState([])
  const [isRegister, setIsRegister] = useState(false)
  const [isLogin, setIsLogin] = useState(false)
  const [loginSuccess, setLoginSuccess]  = useState(false)
  const [logoutSuccess, setLogoutSuccess]  = useState(false)
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("USER")) || {})
  const register = async (user, resetForm) => {
    const { firstname, lastname, email, password } = user
    setIsRegister(true)
    setAuthErrors([])
    await Axios.post('/api/register', {
      firstname,
      lastname,
      email,
      password
    }).then(res => {
      console.log(res)
      resetForm()
    }).catch(err => {
      console.log(err)
      setAuthErrors([...authErrors, err.response.data])
    })
    setIsRegister(false)
  }

  const saveUser = (user) => {
    localStorage.setItem("USER", JSON.stringify(user)) 
    setUser(user)
  }

  const logout = () => {
    localStorage.removeItem("USER");
    setLogoutSuccess(true)
    setUser({})
  }

  const login = async (user, resetForm, setModalOpen) => {
    const { email, password } = user
    setIsLogin(true)
    setAuthErrors([])
    await Axios.post("/api/login", {
      email,
      password
    }).then(res => {
      console.log(res)
      if (res?.data.status === 200) {
        saveUser(res?.data.user)
        setLoginSuccess(true)
        resetForm()
        setModalOpen(false)
        setAuthErrors([])
      }
    }).catch(err => {
      console.log(err)
      if(err.message === "Network Error") {
        setIsLogin(false)
        setAuthErrors([...authErrors, err.message])
      }
      setAuthErrors([err.response.data])
    })
    setIsLogin(false)
  }

  

  return (
    <StateContext.Provider value={{ logoutSuccess, setLogoutSuccess, loginSuccess, setLoginSuccess, logout, setUser, user, register, authErrors, login, registerModalOpen, setRegisterModalOpen, loginModalOpen, setLoginModalOpen, isRegister, isLogin }}>
      {children}
    </StateContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => useContext(StateContext)
