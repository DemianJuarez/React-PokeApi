import { useContext, useEffect } from "react";
import { PokemonHomeContainer } from "./PokemonHomeContainer";
import { PokemonContext } from "../contexts/PokemonContext";

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
    <div
      className="containerPokemons"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "wrap",
        backgroundColor: "lightgray",
        boxSizing: "border-box",
        gap: "20px",
        padding: "40px",
      }}
    >
      {pokemonData &&
        returnPokemons().map((pokemon) => (
          <div
            className="containerPokemon"
            style={{ width: "300px", height: "300px" }}
            key={pokemon.name}
          >
            <PokemonHomeContainer pokemon={pokemon} />
          </div>
        ))}
    </div>
  );
};
