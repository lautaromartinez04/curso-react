import React, { useCallback, useState } from 'react'
import { Incrementar } from "./Incrementar"

export const CallBackComponent = () => {

    const [counter, setCounter] = useState(0)

    const incrementarPadre = useCallback((val) => {
        setCounter( contador=> contador + val)
    }, [])

  return (
    <>  
    <h1>contador: {counter}</h1>
        <Incrementar incrementar={incrementarPadre}/>
    </>
  )
}
