import React, { useEffect, useState } from 'react'
import { UserList } from './components/UserList'

export const UserApp = () => {

   
    const [endpoint, setEndpoint] = useState('users')

    const HandleFetch = () => {
        if (endpoint === 'users') {
            setEndpoint('comments')
        } else {
            setEndpoint('users')
        }
    }

    return (
        <>
            <h1>Lista de Usuarios</h1>
            <button onClick={HandleFetch}>Click</button>
            <UserList endPoint={endpoint}></UserList>
            
            
        </>
    )
}
