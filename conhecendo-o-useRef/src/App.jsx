import { useRef, useState } from "react";
import RefExample from "./components/RefExample";

export default function App() {
  let variable = 0;
  const ref = useRef(0);
  const [state, setState] = useState(0);

  const showValues = () => {
    alert(`
            Variável: ${variable}
            Ref: ${ref.current}
            State: ${state}
        `);
  };

  return (
    <div>
      <h2>UseRef para acessar o DOM</h2>
      <hr />
      <RefExample />
      <h2>Utilizando UseRef</h2>
      <hr />
      <p>Variável: {variable}</p>
      <p>Ref: {ref.current}</p>
      <p>State: {state}</p>
      <button onClick={() => variable++}>Aumentar Variável</button>
      <button onClick={() => ref.current++}>Aumentar Ref</button>
      <button onClick={() => setState((state) => state + 1)}>
        Aumentar State
      </button>
      <button onClick={showValues}>Mostrar Valores</button>
    </div>
  );
}
