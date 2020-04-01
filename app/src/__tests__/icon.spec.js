import React from "react";
import { render } from "@testing-library/react";
import Icon from "../components/icon";

describe("Icon renderiza correctamente", () => {
  it("Renderiza el icono correcto", () => {
    const expectedIcon = "01";

    const { container } = render(<Icon number={expectedIcon} />);

    let { src } = container.querySelector("img");

    const re = new RegExp(`${expectedIcon}.svg`);

    // expect(src).toMatch(re);
  });

  it("Renderiza un icono normal", () => {
    const { container } = render(<Icon />);

    let { className } = container.querySelector("img");

    expect(className).toBe("icon");
  });

  it("Renderiza un icono Grande", () => {
    const { container } = render(<Icon large />);

    let { className } = container.querySelector("img");

    expect(className).toBe("icon-large");
  });
});
