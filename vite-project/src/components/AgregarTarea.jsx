import React, { useState } from "react";

export const AgregarTarea = ({agregarTarea}) => {
  const [InputValue, setInputValue] = useState("");
  const onInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    agregarTarea(InputValue);
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Ingresa nueva tarea"
        value={InputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
