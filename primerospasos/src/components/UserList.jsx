import React, { useEffect, useState } from 'react'
import { useFetchData } from './hooks/useFetchData'

export const UserList = ({endPoint}) => {
    const {data, isLoading} = useFetchData(endPoint)
    return (
        <>
            <ol>
                {isLoading 
                ? <p>'Cargando...' </p>: endPoint=='users'
                ? data.map((user) => <li key={user.id}>{user.name}</li>)
                : data.map((comment) => <li key={comment.id}>{comment.name}</li>)}
            </ol>
        </>

    )
}
