import React, { useState } from "react";

const colors = [
  "red",
  "green",
  "blue",
  "yellow",
  "purple",
  "orange",
  "cyan",
  "magenta",
  "lime",
  "teal",
  "navy",
  "indigo",
  "violet",
  "fuchsia",
  "pink",
];

export default function ColorSearch() {
  const [color, setColor] = useState("");
  const [filteredColors, setFilteredColors] = useState([]);
  const handleFilter = (event) => {
    const value = event.target.value;
    setColor(value);
    if (value === "") {
      setFilteredColors([]);
    } else {
      const filtered = colors.filter((color) => color.includes(value));
      setFilteredColors(filtered);
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
