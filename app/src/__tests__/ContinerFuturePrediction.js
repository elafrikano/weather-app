import React from "react";
import { render, act } from "@testing-library/react";
import ContainerFuturePredictions from "../containers/ContainerFuturePredictions";
import { getFuturePrediction } from "../services/OpenWeatherService";

jest.mock("../services/OpenWeatherService");

it("Rendiriza las predicciones futuras desde la llamada al servicio", async () => {
  const mockFuturePredictions = [
    {
      day: "Lun",
      temp: 40
    },
    {
      day: "Mar",
      temp: 40
    },
    {
      day: "Mie",
      temp: 40
    },
    {
      day: "Jue",
      temp: 40
    },
    {
      day: "Vie",
      temp: 40
    }
  ];
  getFuturePrediction.mockResolvedValue(mockFuturePredictions);
  let getByText;
  await act(async () => {
    ({ getByText } = render(<ContainerFuturePredictions />));
  });
  mockFuturePredictions.forEach(futurePrediction => {
    expect(getByText(futurePrediction.day)).toBeInTheDocument();
  });
});
