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
        <div
          key={pokemonDetalle.name}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            background: "linear-gradient(60deg, #FF5733, #33FF57, #5733FF)",
            width: "300px",
            height: "300px",
            alignItems: "center",
            border: "4px solid black",
            borderRadius: "25px",
            fontSize: "24px",
            boxSizing: "border-box",
          }}
        >
          <img
            src={`${pokemonDetalle && pokemonDetalle.sprites.front_default}`}
            style={{ width: "auto", height: "275px" }}
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
