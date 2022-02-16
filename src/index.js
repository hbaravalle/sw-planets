import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import PlanetsList from "./PlanetsList";
import PlanetDetail from "./PlanetDetail";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<PlanetsList />} />
        <Route path="/detail/:planetId" element={<PlanetDetail />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
