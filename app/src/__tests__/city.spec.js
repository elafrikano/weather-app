import React from "react";
import { render } from "@testing-library/react";
import City from "../components/city";

it("City Renderiza la ciudad correcta", () => {
  const expectedCity = "Buenos Aires";

  const { getByText } = render(<City city={expectedCity} />);

  expect(getByText(expectedCity)).toBeInTheDocument();
});
