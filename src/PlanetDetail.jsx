import { Fragment } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

export default function PlanetDetail() {
  const { planetId } = useParams();
  const getPlanet = async (id) => {
    const response = await fetch(`https://swapi.dev/api/planets/${id}`);
    return response.json();
  };
  const planetDetail = useQuery("PLANET_DETAIL", () => getPlanet(planetId));
  console.log(planetDetail);
  return (
    <>
      <div className="planet-detail">
        <button>← Back to all planets</button>
        <h2>{planetDetail.name}</h2>
        <table>
          <tbody>
            <tr>
              <td>Rotation period</td>
              <td>{planetDetail.rotation_period}</td>
            </tr>
            <tr>
              <td>Orbital period</td>
              <td>{planetDetail.orbital_period}</td>
            </tr>
            <tr>
              <td>Diameter</td>
              <td>{planetDetail.diameter}</td>
            </tr>
            <tr>
              <td>Climate</td>
              <td>{planetDetail.climate}</td>
            </tr>
            <tr>
              <td>Gravity</td>
              <td>{planetDetail.gravity}</td>
            </tr>
            <tr>
              <td>Terrain</td>
              <td>Desert</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
