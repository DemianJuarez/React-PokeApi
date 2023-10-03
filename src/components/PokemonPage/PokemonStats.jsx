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
        <div className="statbars" key={index}>
          <p>
            {stat.label}: {pokemonDetail.stats[index].base_stat}
          </p>
          <div className="bar">
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
