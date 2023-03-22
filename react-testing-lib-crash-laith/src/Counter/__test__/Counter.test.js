import React from "react";
import { render } from "@testing-library/react";

import Counter from "..";

test("header renders with correct text", () => {
  const {getByTestId} = render(<Counter />);
  const header = getByTestId("header");

  expect(header.textContent).toBe("Hi from counter");
});

test("counter should initially start with value of 0", () => {
  const {getByTestId} = render(<Counter />);
  const counter = getByTestId("counter");

  expect(counter.textContent).toBe("0");
});

test("input should initially start with value of 1", () => {
  const {getByTestId} = render(<Counter />);
  const input = getByTestId("userInput");

  expect(input.value).toBe("1");
});

test("add button renders properly", () => {
  const {getByTestId} = render(<Counter />);
  const addBtn = getByTestId("addBtn");

  expect(addBtn.textContent).toBe("+");
});

test("subtract button renders properly", () => {
  const {getByTestId} = render(<Counter />);
  const subtractBtn = getByTestId("subtractBtn");

  expect(subtractBtn.textContent).toBe("-");
});

