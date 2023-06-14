import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

it("renders without crashing", function () {
  render(<TodoList />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

it("can add a new todo", function () {
  const { getByLabelText, queryByText, queryByTestId } = render(<TodoList />);

  // no todos yet
  expect(queryByTestId("todo")).not.toBeInTheDocument();

  const taskInput = getByLabelText("Task:");
  const submitBtn = queryByText("Add a new todo!");

  // fill out the form
  fireEvent.change(taskInput, { target: { value: "walk dog" } });
  fireEvent.click(submitBtn);

  // todo exists!
  const removeBtn = queryByText("X");
  expect(removeBtn).toBeInTheDocument();
  expect(queryByTestId("todo")).toBeInTheDocument();
  expect(queryByTestId("todo")).toHaveTextContent("walk dog");
});
