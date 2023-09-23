import { render, screen } from "@testing-library/react";
import App from "./App";

/** Smoke Test */
test("it renders without crashing", () => {
  render(<App />);
});
