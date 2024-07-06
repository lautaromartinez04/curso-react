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
    { nombre: "Instalaciones necesarias", visto: true },
    { nombre: "Uso de vite", visto: true },
    { nombre: "Variables en JSX", visto: true },
    { nombre: "Props", visto: true },
    { nombre: "Componentes", visto: true },
    { nombre: "Eventos", visto: true },
    { nombre: "UseStates", visto: true },
    { nombre: "Maps", visto: true },
    { nombre: "Redux", visto: false },
    { nombre: "CustomHooks", visto: false },
  ];

  const [Arreglo, setArreglo] = useState(listadoSecciones);

  console.log(Arreglo);
  return (
    <>
      <h1>Listado de temas del curso</h1>
      <AgregarTarea agregarTarea={setArreglo}> </AgregarTarea>
      <ol>
        {Arreglo.map((item) => (
          <Items key={item.nombre} nombre={item.nombre} visto={item.visto} />
        ))}
      </ol>
    </>
  );
};
