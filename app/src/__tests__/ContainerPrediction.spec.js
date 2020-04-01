import React from "react";
import { render, act } from "@testing-library/react";
import CotainerPrediction from "../containers/ContainerPrediction";
import { getPrediction } from "../services/OpenWeatherService";

jest.mock("../services/OpenWeatherService");

it("Rendiriza la prediccion desde la llamada al servicio", async () => {
  const mockPrediction = {
    icon: "01",
    city: "buenos aires",
    temp: 40
  };
  getPrediction.mockResolvedValue(mockPrediction);
  let getByText;
  await act(async () => {
    ({ getByText } = render(<CotainerPrediction />));
  });
  expect(getByText(mockPrediction.city)).toBeInTheDocument();
});
