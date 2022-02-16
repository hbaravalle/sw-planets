import { Link } from "react-router-dom";

export default function CardPlanet({
  planetId,
  name,
  population,
  terrain,
  climate,
}) {
  return (
    <Link to={"/detail/" + planetId} className="card-planet">
      <h2>{name}</h2>
      <ul>
        <li>Population: {population}</li>
        <li>Climate: {climate}</li>
      </ul>
    </Link>
  );
}
