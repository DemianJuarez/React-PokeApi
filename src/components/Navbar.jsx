import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();

  // Verifica si estamos en la página "/pokemon/:id"
  const isPokemonDetailPage = location.pathname.startsWith("/pokemon/");

  return (
    <div className="navbarDiv">
      <nav className="navbarNav">
        {isPokemonDetailPage && (
          <Link to="/" className="linkNavbar">
            Volver
          </Link>
        )}
        <img
          className="pokeapiLogo"
          src="/public/pokeapi_256.3fa72200.png"
          alt="PokeAPI"
        />
      </nav>
    </div>
  );
};
