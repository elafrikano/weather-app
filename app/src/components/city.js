import React from "react";
import { Nav } from "react-bootstrap";

function City({ city }) {
  return (
    <Nav.Item className="px-5">
      <Nav.Link
        eventKey={city}
        style={{ fontSize: 20 }}
        className="text-center"
      >
        {city}
      </Nav.Link>
    </Nav.Item>
  );
}
export default City;
