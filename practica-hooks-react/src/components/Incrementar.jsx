import React, { memo } from "react";

export const Incrementar = memo(({ incrementar }) => {
  console.log("redibujando");
  return (
    <>
      <button
        className="btn btn-outline-primary"
        onClick={() => incrementar(10)}
      >
        <i className="fa-solid fa-plus"></i>
      </button>
    </>
  );
});
