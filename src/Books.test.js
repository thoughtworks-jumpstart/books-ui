import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import Books from "./Books.js";

it("renders a list of books", () => {
  const books = [
    {
      title: "Harry Potter",
      _id: "123"
    },
    {
      title: "Game of Thrones",
      _id: "456"
    }
  ];

  const renderer = new ShallowRenderer();
  renderer.render(<Books data={books} />);
  const output = renderer.getRenderOutput();

  expect(output).toMatchSnapshot();
});
