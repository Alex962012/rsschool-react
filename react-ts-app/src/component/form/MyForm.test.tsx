import { describe, expect } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import React from "react";
import MyForm from "./MyForm";

describe("Form", () => {
  afterEach(() => {
    cleanup();
  });

  it("is rendered", () => {
    render(<MyForm />);
    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Description")).toBeInTheDocument();
    expect(screen.getByText("Receipt time")).toBeInTheDocument();
    expect(screen.getByText("Price")).toBeInTheDocument();
    expect(
      screen.getByText("I consent to my personal data")
    ).toBeInTheDocument();
  });
});
