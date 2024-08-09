import React, { useState } from "react";
import searchColors from "../logic/searchColors";

export default function ColorSearch() {
  const [color, setColor] = useState("");
  const [filteredColors, setFilteredColors] = useState([]);
  const handleFilter = (event) => {
    const query = event.target.value;
    setColor(query);
    if (query === "") {
      setFilteredColors([]);
    } else {
      const result = searchColors(query);
      setFilteredColors(result);
      console.log(result);
    }
  };
  return (
    <div className="color-searching">
      <h1>Color Searching</h1>
      <input
        type="text"
        value={color}
        onChange={handleFilter}
        placeholder="Search Colors"
      ></input>
      <ul>
        {filteredColors.map((color) => (
          <li key={color}>{color}</li>
        ))}
      </ul>
    </div>
  );
}
