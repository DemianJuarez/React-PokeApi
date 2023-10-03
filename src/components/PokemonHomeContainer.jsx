import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PokemonContext } from "../contexts/PokemonContext";
export const PokemonHomeContainer = (props) => {
  const { pokemon } = props;
  const [pokemonDetalle, setPokemonDetalle] = useState(null);
  const { getDetail } = useContext(PokemonContext);

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  useEffect(() => {
    pokemon && getDetail(pokemon, setPokemonDetalle);
  }, []);

  return (
    <Link to={pokemonDetalle && `/pokemon/${pokemonDetalle.id}`}>
      {pokemonDetalle && (
        <div className="containerPokemonHome" key={pokemonDetalle.name}>
          <img
            className="imagePokemon"
            src={`${pokemonDetalle && pokemonDetalle.sprites.front_default}`}
          ></img>
          <h3>
            {pokemonDetalle && pokemonDetalle.id}-{" "}
            {capitalize(pokemonDetalle.name)}
          </h3>
        </div>
      )}
    </Link>
  );
};
