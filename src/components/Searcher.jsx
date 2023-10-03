import { useContext } from "react";
import { PokemonContext } from "../contexts/PokemonContext";

export const Searcher = () => {
  const { handleChangeInput } = useContext(PokemonContext);

  return (
    <div className="searcher">
      <input
        className="inputSearchBar"
        placeholder="Buscar Pokemon"
        onChange={handleChangeInput}
      ></input>
    </div>
  );
};
