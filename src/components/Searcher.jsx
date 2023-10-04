import { useContext } from "react";
import { PokemonContext } from "../contexts/PokemonContext";
import "./Searcher.css";

export const Searcher = () => {
  const { setSearch } = useContext(PokemonContext);

  const handleChangeInput = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  return (
    <div className="searcher">
      <input
        className="inputSearchBar"
        placeholder="Buscar Pokemon"
        onChange={handleChangeInput}
      />
    </div>
  );
};
