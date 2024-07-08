import React from "react";
import { useState } from "react";
import { AgregarTarea } from "./components/AgregarTarea";

const Items = ({ nombre, visto }) => {
  return (
    <>
      <li>
        {nombre}
        {visto ? "✅" : "❌"}
      </li>
    </>
  );
};

export const ListadoApp = () => {
  const addTask = () => {
    setArreglo([...Arreglo, { nombre: "Nueva Tarea", visto: false }]);
  };

  let listadoSecciones = [
    { id: 1, nombre: "Instalaciones necesarias", visto: true },
    { id: 2, nombre: "Uso de vite", visto: true },
    { id: 3, nombre: "Variables en JSX", visto: true },
    { id: 4, nombre: "Props", visto: true },
    { id: 5, nombre: "Componentes", visto: true },
    { id: 6, nombre: "Eventos", visto: true },
    { id: 7, nombre: "UseStates", visto: true },
    { id: 8, nombre: "Maps", visto: true },
    { id: 9, nombre: "Redux", visto: false },
    { id: 10, nombre: "CustomHooks", visto: false },
  ];

  const [Arreglo, setArreglo] = useState(listadoSecciones);

  const  onAddTask = (val) => {
    let val = val.trim();
    if (val<1) return
    const envio = {
      id: Arreglo.length + 1,
      nombre: val,
      visto: false
    }
    setArreglo([...Arreglo, envio]);
  }

  console.log(Arreglo);
  return (
    <>
      <h1>Listado de temas del curso</h1>
      <AgregarTarea agregarTarea={onAddTask}> </AgregarTarea>
      <ol>
        {Arreglo.map((item) => (
          <Items key={item.id} nombre={item.nombre} visto={item.visto} />
        ))}
      </ol>
    </>
  );
};
