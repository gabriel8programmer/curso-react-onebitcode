import { useState, useEffect } from "react";

const fetchPokemon = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
  const data = await response.json();
  return data.results;
};

export default function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetchPokemon().then((res) => {
      console.log("Requisição realizada");
      console.log(res);
      setPokemon(res);
    });
  }, []);

  return (
    <div className="app">
      <div>
        <h2>API do pokemon</h2>

        <ul className="pokemon">
          {pokemon.map((mon) => (
            <li key={mon.name}>
              <span>{mon.name}</span>
              <button>Ver detalhes</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
