import { Navbar } from "./components/Navbar";
import { PokemonsHomePage } from "./pages/PokemonsHomePage";
import { Routes, Route } from "react-router-dom";
import { PokemonPage } from "./pages/PokemonPage";
import { PokemonProvider } from "./contexts/PokemonContext";

function App() {
  return (
    <PokemonProvider>
      <Routes>
        <Route
          path="/"
          element={
            <div className="div">
              <Navbar />
              <PokemonsHomePage />
            </div>
          }
        />
        <Route
          path="/pokemon/:id"
          element={
            <div>
              <Navbar />
              <PokemonPage />
            </div>
          }
        />
      </Routes>
    </PokemonProvider>
  );
}

export default App;
