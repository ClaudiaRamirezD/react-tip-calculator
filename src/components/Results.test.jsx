import "@testing-library/jest-dom";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Results from "./Results";

describe("Results component", () => {
  it("muestra los valores de tip y total por persona", () => {
    render(
      <Results
        tipAmount={5}
        totalPerPerson={25}
        onReset={() => {}}
        disabled={false}
      />
    );
    expect(screen.getByText(/\$5\.00/i)).toBeInTheDocument();
    expect(screen.getByText(/\$25\.00/i)).toBeInTheDocument();
  });

  it("el botón reset está deshabilitado si disabled=true", () => {
    render(
      <Results
        tipAmount={0}
        totalPerPerson={0}
        onReset={() => {}}
        disabled={true}
      />
    );
    expect(screen.getByRole("button", { name: /reset/i })).toBeDisabled();
  });
});
