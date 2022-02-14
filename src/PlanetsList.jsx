import { useState } from "react";
import { useQuery } from "react-query";

import CardPlanet from "./CardPlanet";

let getPlanets = async () => {
  let response = await fetch(`https://swapi.dev/api/planets/`);
  return response.json();
};

export default function PlanetsList() {
  let query = useQuery("PLANETS", () => getPlanets());

  if (query.isLoading) {
    return <h2>Loading planets...</h2>;
  }
  if (query.isError) {
    throw new Error("Hubo un error al cargar los planetas");
  }
  return (
    <>
      {query.data.results.map((element, index) => {
        return (
          <CardPlanet
            key={index + 1}
            name={element.name}
            population={element.population}
            climate={element.climate}
          />
        );
      })}
    </>
  );
}
