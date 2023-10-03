import { ContainerPokemons } from "../components/ContainerPokemons";
import { Searcher } from "../components/Searcher";

export const PokemonsHomePage = () => {
  return (
    <div>
      <Searcher />
      <ContainerPokemons />
    </div>
  );
};
