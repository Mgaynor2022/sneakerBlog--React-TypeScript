import { render, screen } from "@testing-library/react";
import About from "./About";

describe("Simple working test", () => {
  it("the title is visible", () => {
    render(<About />);
    expect(
      screen.getByText(
        /Step into the world of sneakers with our vibrant sneaker blog!/i
      )
    ).toBeInTheDocument();
  });
});