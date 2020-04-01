import React from "react";
import { render } from "@testing-library/react";
import FuturePrediction from "../components/futurePrediction";

it("FuturePrediction Renderiza correctamente", () => {
  const expectedDay = "Lun";
  const expectedTemp = 25;

  const { getByText } = render(
    <FuturePrediction day={expectedDay} temp={expectedTemp} />
  );

  expect(getByText(expectedDay)).toBeInTheDocument();
  const re = new RegExp(expectedTemp);
  expect(getByText(re)).toBeInTheDocument();
});
