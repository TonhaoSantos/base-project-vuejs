// Funcao que retorna se um objeto possui uma quantidade de propriedades
export const objectHasQuantityProperties = (obj, count) => {
  if (Object.keys(obj).length === count) return true
  return false
}

// Funcao que retorna se é um objeto
export const itIsObject = (obj) => {
  if (obj.constructor === Object) return true
  return false
}

// Funcao que retorna se é uma string
export const itIsString = (stg) => {
  if (stg.constructor === String) return true
  return false
}

// Funcao que retorna se é um objeto vazio
export const isEmptyObject = (obj) => {
  if (Object.entries(obj).length === 0) return true
  return false
}

// Funcao que retorna se um objeto possui keys
export const objectHasArrayKeys = (obj, keys) => {
  const objkeys = Object.keys(obj)

  if (objkeys.length && keys.length) {
    const result = objkeys.every(key => {
      return keys.includes(key)
    })

    return result
  }

  return false
}

// Funcao que retorna se é um array
export const itIsArray = (item) => {
  if (Array.isArray(item) && item.constructor === Array) return true
  return false
}

// Funcao que retorna uma string JSON em Objeto
export const JsonParse = (item) => {
  return JSON.parse(item)
}

// Funcao que retorna um Objeto em string JSON
export const jsonStringify = (item) => {
  return JSON.stringify(item)
}

// Funcao que centraliza o setInterval
export const interval = (time, func) => {
  setInterval(func, time)
}

// Funcao que centraliza o setTimeout
export const timeout = (time, func) => {
  setTimeout(func, time)
}

// Funcao que obtem o media querie em js
export const getMediaQueries = () => {
  return window.innerWidth
}

// Funcao que verifica se a tela esta em um media querie x
export const isThisMediaQueries = (newMedia = '(min-width: 400px)') => {
  if (window.matchMedia(newMedia).matches) return true
  return false
}

// Funcao que verifica se é vazio e retorna booleano
export const isEmpty = (value) => {
  return !!value
}

// Funcao que transforma null em 0
export const fixNullToNumber = (value) => {
  if (value === null) return 0
  return value
}

// Funcao que redireciona para uma URL externa
export const goExternalLocation = (value) => {
  if (!value) return

  window.location.href = value
}

// Funcao que valida email
export const isValidEmail = (email) => {
  const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  return emailPattern.test(email)
}

// Funcao que valida senha
export const isValidPassword = (password) => {
  if (password.length >= 8) return true

  return false
}

// Funcao trim
export const trimString = (value) => {
  return value.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
}

// Funcao remove espacos
export const removeSpaceInString = (value) => {
  return value.replace(/\s+/g, '')
}

// Funcao que retorna o token local
export const getLocalToken = (value) => {
  return localStorage.getItem(process.env.VUE_APP_TOKEN_NAME)
}

// Funcao que seta o token local
export const setLocalToken = (token) => {
  localStorage.setItem(process.env.VUE_APP_TOKEN_NAME, token)
}

// Funcao que remove o token local
export const removeLocalToken = () => {
  localStorage.removeItem(process.env.VUE_APP_TOKEN_NAME)
}

// Funcao que verifica se o token é valido
export const tokenIsValid = async (token) => {
  if (token) return true

  return false
}

// Funcao seta a role local
export const setLocalRole = (role) => {
  localStorage.setItem('system_role', role)
}

// Funcao remove a role local
export const removeLocalRole = (role) => {
  localStorage.removeItem('system_role')
}

// Funcao retorna a role local
export const getLocalRole = () => {
  return localStorage.getItem('system_role')
}
