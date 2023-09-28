export const PokemonLayout = (props) => {
  const { dataPok, pokemonDetail } = props;
  console.log(
    "🚀 ~ file: PokemonLayout.jsx:3 ~ PokemonLayout ~ pokemonDetail:",
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
      {dataPok && pokemonDetail && (
        <div
          className="containerScreen"
          style={{
            display: "flex",
            width: "100vw",
            height: "calc(100vh - 60px)",
            backgroundColor: "lightGray",
          }}
        >
          <div
            className="container"
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-around",
              alignItems: "center",
              paddingTop: "1rem",
            }}
          >
            <div
              className="statsPokemon"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "26px",
                height: "100%",
                width: "228px",
              }}
            >
              <div
                className="containerStats"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <h3>Base Stats</h3>
                <p>HP: {pokemonDetail.stats[0].base_stat}</p>
                <p>Attack: {pokemonDetail.stats[1].base_stat}</p>
                <p>Defense: {pokemonDetail.stats[2].base_stat}</p>
                <p>Special-Attack: {pokemonDetail.stats[3].base_stat}</p>
                <p>Special-Defense: {pokemonDetail.stats[4].base_stat}</p>
                <p>Speed: {pokemonDetail.stats[5].base_stat}</p>
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
              <h2>{dataPok.name}</h2>
              <h3>ID: #{pokemonDetail.id}</h3>
              <img
                src={`${pokemonDetail.sprites.front_default}`}
                style={{
                  display: "flex",
                  width: "auto",
                  height: "400px",
                }}
              ></img>
              <div
                className="types"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "200px",
                  justifyContent: "space-around",
                }}
              >
                {pokemonDetail.types.map((type, index) => (
                  <p
                    key={index}
                    className="typeP"
                    style={{
                      backgroundColor: colors[type.type.name],
                      borderRadius: "6px",
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
                {pokemonDetail.moves.slice(0, 18).map((move, index) => (
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
