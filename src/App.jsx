import { Navbar } from "./components/Navbar";
import { useState, useEffect } from "react";
import { Pokemons } from "./pages/Pokemons";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PokemonId } from "./pages/PokemonId";

function App() {
  const [dataApi, setDataApi] = useState([]);
  const [search, setSearch] = useState("");

  const handleInput = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  useEffect(() => {
    const getData = async () => {
      const api = "https://pokeapi.co/api/v2/pokemon/?limit=151";
      const response = await fetch(api);
      const data = await response.json();
      setDataApi(data.results);
      return data.results;
    };
    getData();
  }, []);

  const returnPokemons = () => {
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
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div
              className="div"
              style={{ backgroundColor: "lightGray", height: `100vh` }}
            >
              <Navbar />
              <Pokemons handleInput={handleInput} dataApi={returnPokemons()} />
            </div>
          }
        />
        <Route
          path="/pokemon/:id"
          element={
            <div>
              <Navbar />
              <PokemonId dataApi={dataApi} />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
