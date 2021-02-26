// Funcao que centraliza o addEventListener
// wantsUntrusted é opcional
export const eventListener = async (event, func, wantsUntrusted = false) => {
  document.addEventListener(event, func, wantsUntrusted)
}
