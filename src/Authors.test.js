import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import Authors from "./Authors.js";

it("renders a list of authors", () => {
  const authors = [
    {
      name: "J K Rowling",
      _id: "123"
    },
    {
      name: "George R R Martin",
      _id: "456"
    }
  ];

  const renderer = new ShallowRenderer();
  renderer.render(<Authors data={authors} />);
  const output = renderer.getRenderOutput();

  expect(output).toMatchSnapshot();
});
