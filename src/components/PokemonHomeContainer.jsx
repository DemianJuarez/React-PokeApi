import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PokemonContext } from "../contexts/PokemonContext";
import "./PokemonHomeContainer.css";
export const PokemonHomeContainer = (props) => {
  const { pokemon } = props;
  const [pokemonDetalle, setPokemonDetalle] = useState(null);
  const { getDetail, setSearch } = useContext(PokemonContext);

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  useEffect(() => {
    pokemon && getDetail(pokemon, setPokemonDetalle);
    setSearch("");
  }, []);

  return (
    <Link to={pokemonDetalle && `/pokemon/${pokemonDetalle.id}`}>
      {pokemonDetalle && (
        <div className="containerPokemonHome" key={pokemonDetalle.name}>
          <img
            className="imagePokemon"
            src={`${pokemonDetalle.sprites.front_default}`}
          />
          <h3>
            {pokemonDetalle.id}- {capitalize(pokemonDetalle.name)}
          </h3>
        </div>
      )}
    </Link>
  );
};
