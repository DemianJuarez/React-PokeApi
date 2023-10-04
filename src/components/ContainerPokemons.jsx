import { useContext, useEffect } from "react";
import { PokemonHomeContainer } from "./PokemonHomeContainer";
import { PokemonContext } from "../contexts/PokemonContext";
import "./ContainerPokemons.css";

export const ContainerPokemons = () => {
  const { pokemonData, search, getAllPokemons } = useContext(PokemonContext);

  const returnPokemons = () => {
    if (search.length > 0) {
      const searchMin = search.toLowerCase();
      const filteredData = pokemonData.filter((pokemon) => {
        const pokemonTitleMin = pokemon.name.toLowerCase();
        return pokemonTitleMin.includes(searchMin);
      });

      return filteredData;
    } else {
      let filteredData = "";
      filteredData = pokemonData;
      return filteredData;
    }
  };

  useEffect(() => {
    getAllPokemons();
    console.log("corrio get all pokemons");
  }, []);

  return (
    <div className="containerPokemons">
      {pokemonData &&
        returnPokemons().map((pokemon) => (
          <div className="containerPokemon" key={pokemon.name}>
            <PokemonHomeContainer pokemon={pokemon} />
          </div>
        ))}
    </div>
  );
};
