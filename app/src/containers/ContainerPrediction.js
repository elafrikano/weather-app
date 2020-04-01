import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Icon from "../components/icon";
import Prediction from "../components/prediction";
import { getPrediction } from "../services/OpenWeatherService";

function ContainerPrediction({ city }) {
  const [state, setState] = useState({});
  const [icon, setIcon] = useState("01");
  useEffect(() => {
    (async () => {
      let response = await getPrediction({ city });
      setIcon(response.icon);
      setState(response);
    })();
  }, [city]);
  return (
    <Container fluid className="mt-1">
      <Row>
        <Col className="d-flex justify-content-center">
          <Prediction city={state.city} temp={state.temp} />
        </Col>
        <Col className="d-flex justify-content-center">
          <Icon number={icon} large />
        </Col>
      </Row>
    </Container>
  );
}

export default ContainerPrediction;
