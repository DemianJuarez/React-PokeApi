import { ContainerPokemons } from "../components/ContainerPokemons";
import { Searcher } from "../components/Searcher";

export const Pokemons = (props) => {
  const { handleInput, dataApi } = props;
  return (
    <div>
      <Searcher handleInput={handleInput} />
      <ContainerPokemons dataApi={dataApi} />
    </div>
  );
};
