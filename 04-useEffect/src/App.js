import React, { useEffect, useState } from "react";

import './App.css';

function App() {
  const tabs = ['fire', 'water', 'grass', 'electric', 'ground', 'flying', 'poison', 'bug', 'ice', 'rock', 'steel', 'dragon']
  const [type, setType] = useState('fire')
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
      const data = await response.json();

      const pokemonPromises = data.pokemon.map(async (pokemon) => {
        const pokemonResponse = await fetch(pokemon.pokemon.url);
        const pokemonData = await pokemonResponse.json();
        return pokemonData;
      });

      const pokemonDetails = await Promise.all(pokemonPromises);
      setPokemons(pokemonDetails);
    } catch (error) {
      console.log(error);
    }
  };

  fetchData();
}, [type]);


  return (
    <div className="App">
      {tabs.map(tab => (
        <button key={tab} onClick={() => setType(tab)}
        style={
          type === tab ? {
            color: 'white',
            backgroundColor: 'rgb(11, 39, 61)'
          } : {}
        }>
          {tab}
        </button>  
      ))}

      <div className="board">
        {pokemons.map(pokemon => (
          <div key={pokemon.name}>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            {pokemon.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
