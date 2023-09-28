import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export const PokemonCont = (props) => {
  const { dataApi } = props;

  const [pokemonDetail, setPokemonDetail] = useState(null);

  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  useEffect(() => {
    const getDetail = async () => {
      const api = `${dataApi.url}`;
      const response = await fetch(api);
      const data = await response.json();
      setPokemonDetail(data);
    };
    getDetail();
  }, [dataApi]);

  return (
    <Link to={pokemonDetail && `/pokemon/${pokemonDetail.id}`}>
      <div
        key={dataApi.name}
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
          src={`${pokemonDetail && pokemonDetail.sprites.front_default}`}
          style={{ width: "auto", height: "275px" }}
        ></img>
        <h3>
          {pokemonDetail && pokemonDetail.id}- {capitalize(dataApi.name)}
        </h3>
      </div>
    </Link>
  );
};
