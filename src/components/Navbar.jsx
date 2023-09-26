export const Navbar = () => {
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
        <h1>PokeApi</h1>
      </nav>
    </div>
  );
};
