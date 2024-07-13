import React from "react";
import { useCounter } from "../hooks/useCounter";


export const ContadorComponent = () => {
  const { contador, incrementar, decrementar, resetear } = useCounter(0);

  return (
    <>
      <h1>Contador</h1>
      <h2>{contador}</h2>
      <button className=" btn btn-outline-success" onClick={() => incrementar(1)}>
      <i className="fa-solid fa-plus"></i>
      </button>
      <button className=" btn btn-outline-warning" onClick={() => resetear()}>
      <i className="fa-solid fa-rotate-right"></i>
      </button>
      <button className=" btn btn-outline-danger" onClick={() => decrementar(1, false)}>
      <i className="fa-solid fa-minus"></i>
      </button>
    </>
  );
};
