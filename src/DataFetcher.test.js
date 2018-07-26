import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";
import DataFetcher, { API_HOST } from "./DataFetcher.js";

describe("when data is not loaded", () => {
  it("shows a loading message", () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <DataFetcher endpoint="/some-endpoint" render={jest.fn()} />
    );
    const output = renderer.getRenderOutput();
    expect(output).toMatchSnapshot();
  });
});

describe("when data is fetched", () => {
  let renderer;

  beforeEach(() => {
    fetch.resetMocks();
    renderer = new ShallowRenderer();
  });

  it("calls fetch with the api host and the supplied endpoint", async () => {
    fetch.mockResponseOnce(JSON.stringify([]));
    const endpoint = "/some-endpoint";
    renderer.render(<DataFetcher endpoint={endpoint} render={jest.fn()} />);
    const instance = renderer.getMountedInstance();
    await instance.componentDidMount();

    expect(fetch).toHaveBeenCalledWith(`${API_HOST}${endpoint}`);
  });

  it("calls the render prop", async () => {
    fetch.mockResponseOnce(JSON.stringify([]));
    const mockRenderProp = jest.fn();
    renderer.render(
      <DataFetcher endpoint="/some-endpoint" render={mockRenderProp} />
    );
    const instance = renderer.getMountedInstance();
    await instance.componentDidMount();

    expect(mockRenderProp).toHaveBeenCalled();
  });

  it("sets the fetched data in the state", async () => {
    const data = "I fetched some data!";
    fetch.mockResponseOnce(JSON.stringify(data));
    const mockRenderProp = jest.fn();
    renderer.render(
      <DataFetcher endpoint="/some-endpoint" render={mockRenderProp} />
    );
    const instance = renderer.getMountedInstance();
    await instance.componentDidMount();

    expect(instance.state.data).toEqual(data);
  });

  it("sets isLoading to false", async () => {
    fetch.mockResponseOnce(JSON.stringify([]));
    renderer.render(
      <DataFetcher endpoint="/some-endpoint" render={jest.fn()} />
    );
    const instance = renderer.getMountedInstance();
    await instance.componentDidMount();

    expect(instance.state.isLoading).toBe(false);
  });
});
