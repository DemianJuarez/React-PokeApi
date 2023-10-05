import { createContext, useState } from "react";

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [pokemonData, setPokemonData] = useState(null);
  const [pokemonDetail, setPokemonDetail] = useState(null);
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const changeVisualMode = () => {
    setDarkMode(!darkMode);
    console.log(
      "🚀 ~ file: PokemonContext.jsx:13 ~ changeVisualMode ~ darkMode:",
      darkMode
    );
  };

  const getAllPokemons = async () => {
    const api = "https://pokeapi.co/api/v2/pokemon/?limit=151";
    const response = await fetch(api);
    const data = await response.json();
    setPokemonData(data.results);
  };

  const getPokemon = async (id) => {
    const api = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const response = await fetch(api);
    const data = await response.json();
    setPokemonDetail(data);
  };

  const getDetail = async (dataApi, setPokemonDetalle) => {
    const api = `${dataApi.url}`;
    const response = await fetch(api);
    const data = await response.json();
    setPokemonDetalle(data);
  };

  return (
    <PokemonContext.Provider
      value={{
        pokemonData,
        pokemonDetail,
        search,
        getPokemon,
        getAllPokemons,
        getDetail,
        setPokemonDetail,
        setSearch,
        darkMode,
        changeVisualMode,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
