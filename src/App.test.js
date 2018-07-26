import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import App from "./App";

it("renders without crashing", () => {
  const renderer = new ShallowRenderer();
  renderer.render(<App />);
  const output = renderer.getRenderOutput();
  expect(output).toMatchSnapshot();
});
