import React, { useReducer } from 'react'
import { useForm } from '../hooks/useForm'

const initialState = [

    { id: 1, tarea: 'Entender Reducer', finalizada: false },
    { id: 2, tarea: 'Entender useReducer', finalizada: false },
    { id: 3, tarea: 'Explicar useReducer', finalizada: true },
    { id: 4, tarea: 'Matarme useReducer', finalizada: true }
]

const tareaReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'AGREGAR_TAREA':
            return [...state, action.payload]
        case 'FINALIZAR_TAREA':
            return state.map(tarea => {
                if (tarea.id === action.payload) {
                    return {
                        ...tarea,
                        finalizada: !tarea.finalizada
                    }
                }
                return tarea
            })
        case 'BORRAR_TAREA':
            return state.filter(tarea => {
                return (tarea.id !== action.payload)
            })
        case 'BORRAR_TODAS_TAREAS':
            return []
        default:
            return state
    }
}



export const ListaTareas = () => {

    const [tareas, dispatch] = useReducer(tareaReducer, initialState)

    const { tarea, formState, onInputChange } = useForm({ tarea: '' })

    const agregarTarea = (event) => {
        event.preventDefault()
        if (formState.tarea === '') return

        const tarea = {
            id: Date.now(),
            tarea: formState.tarea,
            finalizada: false
        }
        const action = {
            type: 'AGREGAR_TAREA',
            payload: tarea
        }

        dispatch(action)
    }

    const marcarFinalizada = ({ id, finalizada, tarea }) => {
        const action = {
            type: 'FINALIZAR_TAREA',
            payload: id
        }
        dispatch(action)
    }

    const borrarTarea = ({ id }) => {
        const action = {
            type: 'BORRAR_TAREA',
            payload: id
        }
        dispatch(action)
    }

    const borrarTodasTareas = () => {
        const action = {
            type: 'BORRAR_TODAS_TAREAS'
        }
        dispatch(action)
    }

    return (
        <>
            <form onSubmit={agregarTarea}>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        id="tarea"
                        name='tarea'
                        placeholder="Ingrese la tarea"
                        value={tarea}
                        onChange={onInputChange}
                    ></input>
                </div>
                <button type="submit" className="btn btn-outline-success">Enviar</button>
                <button type ="button" className="btn btn-outline-danger" onClick={borrarTodasTareas}>Resetear</button>
            </form>
            
            <hr />
            <ul className='list-group'>
                {
                    tareas.map(tarea => (
                        <li key={tarea.id} className="list-group-item d-flex justify-content-between align-items-center">
                            <span>{tarea.tarea} </span>
                            <div className="d-flex align-items-center justify-content-between w-25">
                                <input type="checkbox" value={tarea.finalizada} onChange={() => marcarFinalizada(tarea)} checked={tarea.finalizada} />
                                <button className="btn btn-outline-danger" onClick={() => borrarTarea(tarea)}><i className="fa-solid fa-trash"></i></button>
                            </div>

                        </li>
                    ))
                }
            </ul>
        </>
    )
}


