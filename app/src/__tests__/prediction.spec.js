import React from "react";
import { render } from "@testing-library/react";
import Prediction from "../components/prediction";

it("Prediction Renderiza correctamente", () => {
  const expectedCity = "Buenos Aires";
  const expectedTemp = 25;

  const { getByText } = render(
    <Prediction city={expectedCity} temp={expectedTemp} />
  );

  expect(getByText(expectedCity)).toBeInTheDocument();
  const re = new RegExp(expectedTemp);
  expect(getByText(re)).toBeInTheDocument();
});
