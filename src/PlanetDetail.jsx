import { Fragment } from "react";

export default function PlanetDetail() {
  return (
    <>
      <div className="planet-detail">
        <button>← Back to all planets</button>
        <h2>Tattoine</h2>
        <table>
          <tr>
            <td>Rotation period</td>
            <td>23</td>
          </tr>
          <tr>
            <td>Orbital period</td>
            <td>304</td>
          </tr>
          <tr>
            <td>Diameter</td>
            <td>10465</td>
          </tr>
          <tr>
            <td>Climate</td>
            <td>Arid</td>
          </tr>
          <tr>
            <td>Gravity</td>
            <td>1 Standard</td>
          </tr>
          <tr>
            <td>Terrain</td>
            <td>Desert</td>
          </tr>
        </table>
      </div>
    </>
  );
}
