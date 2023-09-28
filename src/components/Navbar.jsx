import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <Link to="/">
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
          <img
            src="/public/pokeapi_256.3fa72200.png"
            style={{ width: "auto", height: "60px" }}
          ></img>
        </nav>
      </div>
    </Link>
  );
};
