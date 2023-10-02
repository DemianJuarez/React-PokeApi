import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PokemonLayout } from "../components/PokemonLayout";
import { PokemonContext } from "../contexts/PokemonContext";

export const PokemonPage = (props) => {
  const { getPokemon, pokemonDetail, getAllPokemons } =
    useContext(PokemonContext);
  let { id } = useParams();
  let num = Number(id - 1);
  let numPok = [num];

  useEffect(() => {
    getPokemon(id);
  }, [numPok]);

  return (
    <>
      {pokemonDetail && (
        <PokemonLayout dataPok={numPok} pokemonDetail={pokemonDetail} />
      )}
    </>
  );
};
