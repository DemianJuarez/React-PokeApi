import { PokemonCont } from "./PokemonCont";

export const ContainerPokemons = (props) => {
  const { dataApi } = props;

  return (
    <div
      className="containerPokemons"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "wrap",
        backgroundColor: "lightgray",
        boxSizing: "border-box",
        gap: "20px",
        padding: "40px",
      }}
    >
      {dataApi.map((item) => (
        <div
          className="containerPokemon"
          style={{ width: "300px", height: "300px" }}
          key={item.name}
        >
          <PokemonCont dataApi={item} />
        </div>
      ))}
    </div>
  );
};
