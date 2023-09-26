import { useEffect, useState } from "react";

export const PokemonCont = (props) => {
  const { dataApi } = props;

  const [pokemonDetail, setPokemonDetail] = useState(null);
  console.log(pokemonDetail);

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  useEffect(() => {
    const getDetail = async () => {
      const api = `${dataApi.url}`;
      const response = await fetch(api);
      const data = await response.json();
      setPokemonDetail(data);
      console.log(pokemonDetail);
    };
    getDetail();
  }, [dataApi]);

  return (
    <div
      key={dataApi.name}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        background: "linear-gradient(to bottom right, #FF7F7F, #D32F2F)",
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
        src={`${pokemonDetail && pokemonDetail.sprites.front_default}`}
        style={{ width: "auto", height: "275px" }}
      ></img>
      <h3>{capitalize(dataApi.name)}</h3>
    </div>
  );
};
