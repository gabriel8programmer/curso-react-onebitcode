import { useState, useEffect } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    console.log("Mudou o contador!");

    return () => {
      console.log("Botão OFF");
      console.log("Componente desmontado!");
    };
  }, [counter]);

  return (
    <div>
      <h2>Conhecendo o UseEffect</h2>
      <hr />
      <div>
        <input
          type="checkbox"
          value={show}
          onChange={() => setShow((state) => !state)}
        />{" "}
        Mostrar botão
      </div>
      <hr />
      {show && (
        <button onClick={() => setCounter((state) => state + 1)}>
          Contador {counter}
        </button>
      )}
    </div>
  );
}
