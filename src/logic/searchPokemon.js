export default async function searchPokemon(name) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  console.log(name);
  if (!response.ok) {
    throw new Error("Pokemon not found");
  }
  const data = await response.json();
  console.log(data);
  return data;
}
