import React from 'react'
import { UsuarioContext } from './UsuarioContext'

const usuario = {
    nombre:"Lautaro",
    apellido: "Martinez",
    tecnologia: "React",
    correo: "lautarom403@gmail.com"
}

export const UsuarioProvider = ({ children }) => {
  return (
    <UsuarioContext.Provider value={{usuario}}>
        {children}
    </UsuarioContext.Provider>
  )
}
