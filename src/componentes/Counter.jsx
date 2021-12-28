import React, { useState } from "react";

export default function Counter() {
  const [cont, setCont] = useState(0);

  function increment() {
    setCont(cont + 1);
  }

  return (
    <>
      <h1>{cont}</h1>
      <button onClick={increment}>+</button>
    </>
  );
}
