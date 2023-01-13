import { fireEvent, render, screen } from "@testing-library/react";
import Login from "./Login";

jest.mock("axios", () => ({
  __esModule: true,
  default: {
    get: () => ({
      data: {
        id: 1,
        name: "John"
      },
    }),
  },
}));

test('user name input should be rendered', () => {
  render(<Login />);
  const userInputElement = screen.getByPlaceholderText(/username/i);
  expect(userInputElement).toBeInTheDocument();
});

test('password input should be rendered', () => {
  render(<Login />);
  const passwordInputElement = screen.getByPlaceholderText(/password/i);
  expect(passwordInputElement).toBeInTheDocument();
});

test('button input should be rendered', () => {
  render(<Login />);
  const btnElement = screen.getByRole("button");
  expect(btnElement).toBeInTheDocument();
});

test('user input should be empty', () => {
  render(<Login />);
  const userInputElement = screen.getByPlaceholderText(/username/i);
  expect(userInputElement.value).toBe("");
});

test('password input should be empty', () => {
  render(<Login />);
  const passwordInputElement = screen.getByPlaceholderText(/password/i);
  expect(passwordInputElement.value).toBe("");
});

test('button should be disabled', () => {
  render(<Login />);
  const btnElement = screen.getByRole("button");
  expect(btnElement).toBeDisabled();
});

test('loading should not be rendered', () => {
  render(<Login />);
  const btnElement = screen.getByRole("button");
  expect(btnElement).not.toHaveTextContent(/please wait/i);
});

test('error message should not be visible', () => {
  render(<Login />);
  const errorEl = screen.getByTestId("error");
  expect(errorEl).not.toBeVisible();
});

test('user input should change', () => {
  render(<Login />);
  const userInputElement = screen.getByPlaceholderText(/username/i);
  const testValue = "test";

  fireEvent.change(userInputElement, {target: {value: testValue}});
  expect(userInputElement.value).toBe(testValue);
});

test('password input should change', () => {
  render(<Login />);
  const passwordInputElement = screen.getByPlaceholderText(/password/i);
  const testValue = "test";

  fireEvent.change(passwordInputElement, {target: {value: testValue}});
  expect(passwordInputElement.value).toBe(testValue);
});

test('button should not be disabled when input is filled', () => {
  render(<Login />);
  const btnElement = screen.getByRole("button");
  const userInputElement = screen.getByPlaceholderText(/username/i);
  const passwordInputElement = screen.getByPlaceholderText(/password/i);
  const testValue = "test";

  fireEvent.change(userInputElement, {target: {value: testValue}});
  fireEvent.change(passwordInputElement, {target: {value: testValue}});
  expect(btnElement).not.toBeDisabled();
});

test('loading should be rendered when clicked', () => {
  render(<Login />);
  const btnElement = screen.getByRole("button");
  const userInputElement = screen.getByPlaceholderText(/username/i);
  const passwordInputElement = screen.getByPlaceholderText(/password/i);
  const testValue = "test";

  fireEvent.change(userInputElement, {target: {value: testValue}});
  fireEvent.change(passwordInputElement, {target: {value: testValue}});
  fireEvent.click(btnElement);
  expect(btnElement).not.toHaveTextContent(/please wait/i);
});

