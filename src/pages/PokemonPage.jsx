import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PokemonLayout } from "../components/PokemonPage/PokemonLayout";
import { PokemonContext } from "../contexts/PokemonContext";

export const PokemonPage = () => {
  const {
    getPokemon,
    setPokemonDetail,
    pokemonDetail,
    pokemonData,
    getAllPokemons,
  } = useContext(PokemonContext);
  let { id } = useParams();

  useEffect(() => {
    getAllPokemons();
  }, []);

  let num = Number(id - 1);
  let dataPok = pokemonData && pokemonData[num];

  useEffect(() => {
    setPokemonDetail(null);
    getPokemon(id);
  }, [id]);

  return <>{pokemonDetail && <PokemonLayout dataPok={dataPok} />}</>;
};
