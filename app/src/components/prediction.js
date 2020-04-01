import React from "react";

function Prediction({ city, temp }) {
  return (
    <div className="my-5 align-self-center">
      <h3>{city}</h3>
      <p style={{ fontSize: 80 }}>{temp} °C</p>
    </div>
  );
}

export default Prediction;
