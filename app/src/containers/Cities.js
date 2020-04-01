import React from "react";
import { Nav } from "react-bootstrap";
import City from "../components/city";
import { cities } from "../constants/cities";

function Cities({ setCity }) {
  return (
    <Nav
      className="justify-content-center mt-1 cities"
      onSelect={selectedKey => setCity(selectedKey)}
    >
      {cities.map((city, index) => (
        <City city={city} key={index} />
      ))}
    </Nav>
  );
}
export default Cities;
