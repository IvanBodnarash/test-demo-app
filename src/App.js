import React from "react";
import ColorSearch from "./components/ColorSearch";
import PokemonSearch from "./components/PokemonSearch";

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
