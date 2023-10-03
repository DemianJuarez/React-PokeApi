export const PokemonStats = (props) => {
  const { pokemonDetail } = props;
  const statBars = [
    { label: "HP", color: "green" },
    { label: "Attack", color: "blue" },
    { label: "Defense", color: "black" },
    { label: "Special-Attack", color: "orange" },
    { label: "Special-Defense", color: "brown" },
    { label: "Speed", color: "red" },
  ];

  return (
    <div>
      {statBars.map((stat, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p>
            {stat.label}: {pokemonDetail.stats[index].base_stat}
          </p>
          <div
            className="bar"
            style={{
              display: "flex",
              width: "300px",
              height: "20px",
              backgroundColor: "gray",
              border: "2px solid black",
            }}
          >
            <div
              className={`bar${stat.label.replace("-", "")}`}
              style={{
                width: `${
                  pokemonDetail.stats[index].base_stat > 100
                    ? 100
                    : pokemonDetail.stats[index].base_stat
                }%`,
                height: "20px",
                backgroundColor: stat.color,
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PokemonStats;