import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();

  // Verifica si estamos en la página "/pokemon/:id"
  const isPokemonDetailPage = location.pathname.startsWith("/pokemon/");

  return (
    <div className="navbarDiv">
      <nav
        className="navbarNav"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "60px",
          background: "linear-gradient(to bottom right, #FF7F7F, #D32F2F)",
        }}
      >
        {isPokemonDetailPage && (
          <Link
            to="/"
            style={{
              position: "absolute",
              left: "10px",
              fontSize: "30px",
              textDecoration: "none",
              color: "#FFFFFF",
            }}
          >
            Volver
          </Link>
        )}
        <img
          src="/public/pokeapi_256.3fa72200.png"
          style={{ width: "auto", height: "60px" }}
          alt="PokeAPI"
        />
      </nav>
    </div>
  );
};
