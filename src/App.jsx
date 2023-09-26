import { ContainerPokemons } from "./components/ContainerPokemons";
import { Navbar } from "./components/Navbar";
import { useState, useEffect } from "react";
import { Searcher } from "./components/Searcher";

function App() {
  const [dataApi, setDataApi] = useState([]);
  const [search, setSearch] = useState("");

  const handleInput = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  useEffect(() => {
    const getData = async () => {
      const api = "https://pokeapi.co/api/v2/pokemon/?limit=20";
      const response = await fetch(api);
      const data = await response.json();
      setDataApi(data.results);
      return data.results;
    };
    getData();
  }, []);

  const returnProducts = () => {
    if (search.length > 0) {
      const searchMin = search.toLowerCase();
      const filteredData = dataApi.filter((pokemon) => {
        const pokemonTitleMin = pokemon.name.toLowerCase();
        return pokemonTitleMin.includes(searchMin);
      });

      return filteredData;
    } else {
      return dataApi;
    }
  };

  return (
    <div
      className="div"
      style={{ backgroundColor: "lightGray", height: `100vh` }}
    >
      <Navbar />
      <Searcher handleInput={handleInput} />
      <ContainerPokemons dataApi={returnProducts()} />
    </div>
  );
}

export default App;
