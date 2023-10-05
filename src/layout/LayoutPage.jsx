import { useContext } from "react";
import { Navbar } from "../components/Navbar";
import "./LayoutPage.css";
import { PokemonContext } from "../contexts/PokemonContext";

export const LayoutPage = ({ children }) => {
  const { darkMode } = useContext(PokemonContext);
  return (
    <div className={`layout ${darkMode ? "dark-mode" : ""}`}>
      <Navbar />
      {children}
    </div>
  );
};
