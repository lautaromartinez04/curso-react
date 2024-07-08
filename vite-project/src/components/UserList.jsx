import React, { useEffect, useState } from 'react'

export const UserList = ({endPoint}) => {

    const [data, setData] = useState([])
    const fetchData = async () => {
        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/${endPoint}`)
            const data = await res.json()
            console.log(data)
            setData(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [endPoint])

    return (
        <>
            <ol>
                {endPoint=='users'? data.map((user) => <li key={user.id}>{user.name}</li>)
                : data.map((comment) => <li key={comment.id}>{comment.name}</li>)}
            </ol>
        </>

    )
}
