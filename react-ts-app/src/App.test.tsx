import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { WrappedApp, App } from "./App";
import { MemoryRouter } from "react-router-dom";
import React from "react";
import About from "./pages/About";
import Form from "./pages/Form";

import FormCard, { CardType } from "./component/form/FormCard";


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

// describe("SearchBar", () => {
//   it("SearchBar renders", () => {
//     render(<SearchBar />);
//     expect(screen.getByText("About")).toBeInTheDocument();
//   });
// });
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


const Card={
  key:1,
  Title:'Title',
  Description:' Description',
  DeliveryTime:'DeliveryTime',
  Price:"Price",
  File: 'string',
  Category: 'string',
  For: 'string'
}
describe("FormCard", () => {
  it("About renders", () => {
    render(<FormCard  key={Card.key}
      Title={Card.Title}
      Description={Card.Description}
      Price={Card.Price}
      DeliveryTime={Card.DeliveryTime}
      File={Card.File}
      Category={Card.Category}
      For={Card.For}/>);
    expect(screen.getByText("Title")).toBeInTheDocument();
  });
});