import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PokemonLayout } from "../components/PokemonLayout";

export const PokemonId = (props) => {
  const { dataApi } = props;
  let { id } = useParams();
  let num = Number(id - 1);
  let dataPok = dataApi[num];
  const [pokemonDetail, setPokemonDetail] = useState(null);

  useEffect(() => {
    const getDetail = async () => {
      const api = dataPok.url;
      const response = await fetch(api);
      const data = await response.json();
      setPokemonDetail(data);
    };
    getDetail();
  }, [dataPok]);

  return (
    <>
      {dataPok && (
        <PokemonLayout dataPok={dataPok} pokemonDetail={pokemonDetail} />
      )}
    </>
  );
};
