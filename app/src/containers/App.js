import React, { useState } from "react";
import { Card } from "react-bootstrap";
import Cities from "./Cities";
import ContainerPrediction from "./ContainerPrediction";
import ContainerFuturePrediction from "./ContainerFuturePredictions";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/style.css";

function App() {
  const [city, setCity] = useState("Buenos Aires");
  return (
    <Card className="m-5 shadow-lg container-app">
      <Card.Body>
        <Cities setCity={setCity} city={city} />
        <ContainerPrediction city={city} />
        <ContainerFuturePrediction city={city} />
      </Card.Body>
    </Card>
  );
}

export default App;
