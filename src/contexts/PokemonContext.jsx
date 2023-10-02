import { createContext, useState } from "react";

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [pokemonData, setPokemonData] = useState(null);
  const [pokemonDetail, setPokemonDetail] = useState(null);
  const [search, setSearch] = useState("");

  const getAllPokemons = async () => {
    const api = "https://pokeapi.co/api/v2/pokemon/?limit=151";
    const response = await fetch(api);
    const data = await response.json();
    setPokemonData(data.results);
  };

  const handleChangeInput = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  const getPokemon = async (id) => {
    const api = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const response = await fetch(api);
    const data = await response.json();
    setPokemonDetail(data);
  };

  return (
    <PokemonContext.Provider
      value={{
        pokemonData,
        pokemonDetail,
        getPokemon,
        getAllPokemons,
        handleChangeInput,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
