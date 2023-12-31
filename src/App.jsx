import { PokemonsHomePage } from "./pages/PokemonsHomePage";
import { Routes, Route } from "react-router-dom";
import { PokemonPage } from "./pages/PokemonPage";
import { PokemonProvider } from "./contexts/PokemonContext";
import { LayoutPage } from "./layout/LayoutPage";

function App() {
  return (
    <PokemonProvider>
      <Routes>
        <Route
          path="/"
          element={
            <LayoutPage>
              <div>
                <PokemonsHomePage />
              </div>
            </LayoutPage>
          }
        />
        <Route
          path="/pokemon/:id"
          element={
            <LayoutPage>
              <div>
                <PokemonPage />
              </div>
            </LayoutPage>
          }
        />
      </Routes>
    </PokemonProvider>
  );
}

export default App;
