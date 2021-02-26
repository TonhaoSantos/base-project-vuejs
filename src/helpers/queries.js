/*
import axios from 'axios'

const API = axios.create({
  baseURL: process.env.VUE_APP_REST_API_V1,
  timeout: 1000,
  responseType: 'json'
})

// Funções da rota de login
export const authUser = async (email, password) => {
  const axiosConfig = {
    email,
    password
  }

  const result = await API.post('/users/authenticate', axiosConfig)
    .then(response => {
      return response
    })
    .catch(error => {
      return error.response
    })

  return result
}

// Funções da rota de refresh-token
export const validRefreshToken = async (token) => {
  const axiosConfig = {}

  const result = await API.post('/users/refresh-token', axiosConfig, {
    headers: {
      'x-access-token': token
    }
  })
    .then(response => {
      return response
    })
    .catch(error => {
      return error.response
    })

  return result
}

// Funções da Rota Forgot Password
export const forgotPassword = async (email) => {
  const axiosConfig = {
    email
  }

  const result = await axios.post('/users/forgot-password', axiosConfig)
    .then(response => {
      return response
    })
    .catch(error => {
      return error.response
    })

  return result
}
*/

// Funções da rota de login
export const authUser = async (email, password) => {
  if (email && email === 'admin' && password && password === 'admin') return true

  return false
}

// Funções da Rota Active (ativar conta)
export const activeUser = async (token, email) => {
  if (token && email) return true
  return false
}

// Funções da Rota Forgot Password
export const forgotPassword = async (email) => {
  if (email) return true
  return false
}

export const userHasForgotPassword = async (token, email) => {
  if (token && email) return true
  return false
}

// Funções da Rota Reset Password
export const resetPassword = async (email, code, password) => {
  if (email && code && password) return true
  return false
}
