import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { WrappedApp, App } from "./App";
import { MemoryRouter } from "react-router-dom";
import React from "react";
import SearchBar from "./component/searchBar/SearchBar";
import About from "./pages/About";
import Form from "./pages/Form";

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

describe("Search bar", () => {
  it("Search renders", () => {
    render(<SearchBar />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
describe("About", () => {
  it("About renders", () => {
    render(<About />);
    expect(screen.getByText("About")).toBeInTheDocument();
  });
});
describe("Form", () => {
  it("Form renders", () => {
    render(<Form />);
    expect(screen.getByText("Form")).toBeInTheDocument();
  });
});
