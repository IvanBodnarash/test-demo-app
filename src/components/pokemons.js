import React, { useState } from "react";

export default function PokemonSearch() {
  const [pokemonName, setPokemonName] = useState("");
  const [chosen, setChosen] = useState(false);
  const [pokemonData, setPokemonData] = useState({
    name: "",
    type: "",
    img: "",
    attack: "",
    defense: "",
    hp: "",
    height: "",
    weight: "",
    species: "",
  });

  const searchPokemon = () => {
    const response = fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(response);
        console.log(data);
        setPokemonData({
          name: pokemonName,
          type: data.types[0].type.name,
          img: data.sprites.front_default,
          attack: data.stats[1].base_stat,
          defense: data.stats[2].base_stat,
          hp: data.stats[0].base_stat,
          height: data.height,
          weight: data.weight,
          species: data.species.name,
        });
        setChosen(true);
      });
    console.log(response);
  };

  return (
    <div className="pokemon-serching">
      <h1>Pokemon Searching</h1>
      <input
        type="text"
        onChange={(e) => setPokemonName(e.target.value)}
        placeholder="Search Pokemon"
      />
      <button onClick={searchPokemon}>Search</button>
      {chosen && (
        <div>
          <h3>{pokemonData.name}</h3>
          <img src={pokemonData.img} alt={pokemonData.name} />
          <p>Type: {pokemonData.type}</p>
          <p>Attack: {pokemonData.attack}</p>
          <p>Defense: {pokemonData.defense}</p>
          <p>HP: {pokemonData.hp}</p>
          <p>Height: {pokemonData.height}</p>
          <p>Weight: {pokemonData.weight}</p>
          <p>Species: {pokemonData.species}</p>
        </div>
      )}
    </div>
  );
}
