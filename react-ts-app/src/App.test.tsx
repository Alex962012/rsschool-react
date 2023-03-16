import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { WrappedApp, App } from "./App";
import { MemoryRouter } from "react-router-dom";
import React from "react";
import Card from "./component/Card";
import SearchBar from "./component/SearchBar";
import About from "./pages/About";
describe("App", () => {
  it("Renders hello world", () => {
    render(<WrappedApp />);

    expect(
      screen.getByRole("heading", {
        level: 1,
      })
    ).toHaveTextContent("Home");
  });
  it("Renders not found if invalid path", () => {
    render(
      <MemoryRouter initialEntries={["/this-route-does-not-exist"]}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole("heading", {
        level: 1,
      })
    ).toHaveTextContent("Not Found");
  });
});
