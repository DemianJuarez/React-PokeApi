export const Searcher = (props) => {
  const { handleInput } = props;

  return (
    <div
      className="searcher"
      style={{
        display: "flex",
        justifyContent: "center",
        height: "45px",
        backgroundColor: "lightgray",
        paddingTop: "20px",
      }}
    >
      <input
        className="inputSearchBar"
        placeholder="Buscar Pokemon"
        onChange={handleInput}
        style={{
          borderRadius: "8px",
          textAlign: "center",
          display: "flex",
        }}
      ></input>
    </div>
  );
};
