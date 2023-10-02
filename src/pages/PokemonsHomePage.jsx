import { useState, useEffect } from "react";
import { ContainerPokemons } from "../components/ContainerPokemons";
import { Searcher } from "../components/Searcher";

export const Pokemons = (props) => {
  const [dataApi, setDataApi] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getData = async () => {};
    getData();
  }, []);

  const returnPokemons = () => {
    if (search.length > 0) {
      const searchMin = search.toLowerCase();
      const filteredData = dataApi.filter((pokemon) => {
        const pokemonTitleMin = pokemon.name.toLowerCase();
        return pokemonTitleMin.includes(searchMin);
      });

      return filteredData;
    } else {
      return dataApi;
    }
  };

  return (
    <div>
      <Searcher handleInput={handleInput} />
      <ContainerPokemons dataApi={returnPokemons()} />
    </div>
  );
};
