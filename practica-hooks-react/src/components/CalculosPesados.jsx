import React, { useMemo, useState } from 'react'





export const CalculosPesados = () => {

    const [listaNumeros, setListaNumeros] = useState([1, 2, 3, 4, 5])
    const [show, setShow] = useState(true)

    const getCalculo = (numeros) => useMemo(() => {
        console.log("calculando")
        return numeros.reduce((a, b) => a * b)
    }, [numeros])

    const agregarNumeros = () => {
        setListaNumeros([...listaNumeros, listaNumeros.length + 1])
    }

  return (
    <>
    <h2>calculo: </h2>
    <p>{getCalculo(listaNumeros)}</p>
    <button className='btn btn-outline-primary' onClick={() => setShow(!show)}>{show? "Show" : "Hide"}</button>
    <button className='btn btn-outline-primary' onClick={() => agregarNumeros()}>Agregar Numeros</button>
    </>
  )
}
