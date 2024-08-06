import React from "react";
import ColorSearch from "./components/colors";
import PokemonSearch from "./components/pokemons";

import "./App.css";

function App() {
  return (
    <div>
      <ColorSearch />
      <hr />
      <PokemonSearch />
    </div>
  );
}

export default App;
