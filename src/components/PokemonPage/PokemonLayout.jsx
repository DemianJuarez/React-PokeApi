import { useContext } from "react";
import { PokemonContext } from "../../contexts/PokemonContext";
import { PokemonStats } from "../PokemonPage/PokemonStats";

export const PokemonLayout = () => {
  const { pokemonDetail } = useContext(PokemonContext);
  console.log(
    "🚀 ~ file: PokemonLayout.jsx:9 ~ PokemonLayout ~ pokemonDetail:",
    pokemonDetail
  );
  const colors = {
    normal: "#A8A77A",
    fire: "#EE8130",
    water: "#6390F0",
    electric: "#F7D02C",
    grass: "#7AC74C",
    ice: "#96D9D6",
    fighting: "#C22E28",
    poison: "#A33EA1",
    ground: "#E2BF65",
    flying: "#A98FF3",
    psychic: "#F95587",
    bug: "#A6B91A",
    rock: "#B6A136",
    ghost: "#735797",
    dragon: "#6F35FC",
    dark: "#705746",
    steel: "#B7B7CE",
    fairy: "#D685AD",
  };

  return (
    <>
      {pokemonDetail.sprites.front_default && (
        <div className="containerScreen">
          <div className="container">
            <div className="statsPokemon">
              <div className="containerStats">
                <h3>Base Stats</h3>{" "}
                <PokemonStats pokemonDetail={pokemonDetail} />
              </div>
            </div>
            <div
              className="containerPokemon"
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                fontSize: "34px",
                width: "228px",
              }}
            >
              <h2>{pokemonDetail.name}</h2>
              <h3>ID: #{pokemonDetail.id}</h3>
              <img
                src={
                  pokemonDetail.sprites.front_default &&
                  `${pokemonDetail.sprites.front_default}`
                }
                style={{
                  display: "flex",
                  width: "auto",
                  height: "400px",
                }}
              ></img>
              <div className="types">
                {pokemonDetail.types.map((type, index) => (
                  <p
                    key={index}
                    className="typeP"
                    style={{
                      backgroundColor: colors[type.type.name],
                      borderRadius: "6px",
                      display: "flex",
                      justifyContent: "center",
                      width: "100%",
                    }}
                  >
                    {type.type.name}
                  </p>
                ))}
              </div>
            </div>
            <div
              className="movementPokemon"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: "20px",
                width: "228px",
                flexWrap: "wrap",
              }}
            >
              <div className="containerMovement">
                <h2>Moves</h2>
                {pokemonDetail.moves.slice(0, 15).map((move, index) => (
                  <p key={index} className="moveP">
                    {move.move.name}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
