import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { WrappedApp, App } from "./App";
import { MemoryRouter } from "react-router-dom";
import React from "react";
import Card from "./component/headerCard/Card";
import SearchBar from "./component/searchBar/SearchBar";
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

const el = {
  id: 1,
  title: "Fjallraven - Foldsack No. 1 Backpack",
  price: 109.95,
  description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  rating: { rate: 3.9, count: 120 },
};
describe("Card component", () => {
  it("Card renders", () => {
    render(
      <Card title={el.title} price={el.price} img={el.image} key={el.id} />
    );
    expect(
      screen.getByText("Fjallraven - Foldsack No. 1 Backpack")
    ).toBeInTheDocument();
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
