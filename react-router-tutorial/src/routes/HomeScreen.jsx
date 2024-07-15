import React, { useContext } from 'react'
import { UsuarioContext } from '../routes/context/UsuarioContext'

export const HomeScreen = () => {

  const { usuario } = useContext(UsuarioContext)

  return (
    <>
      <div class="container mt-5 ">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">Tecnologia</th>
              <th scope="col">Correo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">{usuario.nombre}</th>
              <td>{usuario.apellido}</td>
              <td>{usuario.tecnologia}</td>
              <td>{usuario.correo}</td>
            </tr>
          </tbody>
        </table>
      </div>

    </>
  )
}
