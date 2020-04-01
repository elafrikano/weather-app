import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import FuturePrediction from "../components/futurePrediction";
import { getFuturePrediction } from "../services/OpenWeatherService";

function ContainerFuturePredictions({ city }) {
  const [state, setState] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await getFuturePrediction({ city });
      setState(response);
    })();
  }, [city]);

  return (
    <Container fluid data-test="ContainerFuturePredictions">
      <Row className="justify-content-center">
        {state.map(({ day, temp, icon }, index) => (
          <Col md={2} key={index} className={!index ? "ml-3" : ""}>
            <FuturePrediction day={day} temp={temp} icon={icon} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ContainerFuturePredictions;
