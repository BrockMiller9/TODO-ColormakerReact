import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

it("renders without crashing", function () {
  render(<BoxList />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it("can add a new box", function () {
  const { getByLabelText, queryByText, queryByTestId } = render(<BoxList />);

  // no boxes yet
  expect(queryByTestId("box")).not.toBeInTheDocument();

  const widthInput = getByLabelText("Width:");
  const heightInput = getByLabelText("Height:");
  const colorInput = getByLabelText("Color:");
  const submitBtn = queryByText("Add a new box!");

  // fill out the form
  fireEvent.change(widthInput, { target: { value: "100" } });
  fireEvent.change(heightInput, { target: { value: "100" } });
  fireEvent.change(colorInput, { target: { value: "magenta" } });
  fireEvent.click(submitBtn);

  // box exists!
  const removeBtn = queryByText("X");
  expect(removeBtn).toBeInTheDocument();
  expect(queryByTestId("box")).toBeInTheDocument();
  expect(queryByTestId("box")).toHaveStyle(`
    width: 100px;
    height: 100px;
    background-color: magenta;
  `);
});
