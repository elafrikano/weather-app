import React from "react";
import { Card } from "react-bootstrap";
import Icon from "../components/icon";

function FuturePrediction({ day, temp, icon }) {
  return (
    <Card style={{ width: "10rem" }} className="future-prediction text-center">
      <Card.Body>
        <Card.Title>{day}</Card.Title>

        <Card.Text>
          <Icon number={icon} /> {temp} °C
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default FuturePrediction;
