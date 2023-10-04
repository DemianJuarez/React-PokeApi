import { useContext } from "react";
import { PokemonContext } from "../../contexts/PokemonContext";
import { PokemonStats } from "../PokemonPage/PokemonStats";
import "./PokemonLayout.css";
import { colors } from "../../utils/utilsPokemonLayout";

export const PokemonLayout = () => {
  const { pokemonDetail } = useContext(PokemonContext);

  return (
    <>
      {pokemonDetail.sprites.front_default && (
        <div className="containerScreen">
          <div className="container">
            <div className="statsPokemon">
              <div className="containerStats">
                <h3>Base Stats</h3>
                <PokemonStats pokemonDetail={pokemonDetail} />
              </div>
            </div>
            <div className="containerPokemonss">
              <h2>{pokemonDetail.name}</h2>
              <h3>ID: #{pokemonDetail.id}</h3>
              <img
                src={
                  pokemonDetail.sprites.front_default &&
                  `${pokemonDetail.sprites.front_default}`
                }
                className="imageOnlyPokemons"
              />
              <div className="types">
                {pokemonDetail.types.map((type, index) => (
                  <p
                    key={index}
                    className="typeP"
                    style={{
                      backgroundColor: colors[type.type.name],
                    }}
                  >
                    {type.type.name}
                  </p>
                ))}
              </div>
            </div>
            <div className="movementPokemon">
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
