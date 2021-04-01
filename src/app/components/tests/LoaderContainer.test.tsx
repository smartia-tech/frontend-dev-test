import LoaderContainer from "../LoaderContainer";
import { fireEvent, render, screen } from "tests/setup";

test("Shows loader only when loading", async () => {
  render(<LoaderContainer loading />);

  const loader = screen.getByRole("status");
  expect(loader).toBeInTheDocument();

  const errorMessage = screen.queryByRole("alert");
  expect(errorMessage).not.toBeInTheDocument();
});

test("Shows error message only when there is an error", () => {
  render(<LoaderContainer error />);

  const errorMessage = screen.queryByRole("alert");
  expect(errorMessage).toBeInTheDocument();

  const loader = screen.queryByRole("status");
  expect(loader).not.toBeInTheDocument();
});

test("Calls error callback when there is an error", () => {
  const errorCallback = jest.fn();

  render(<LoaderContainer error errorControlOnClick={errorCallback} />);

  const errorMessage = screen.queryByRole("alert");
  expect(errorMessage).toBeInTheDocument();

  const tryButton = screen.getByText(/try again/i);
  fireEvent.click(tryButton);

  expect(errorCallback).toBeCalled();

  const loader = screen.queryByRole("status");
  expect(loader).not.toBeInTheDocument();
});

test("Shows child content only when there is no error or loading action", () => {
  render(
    <LoaderContainer>
      <p>Child</p>
    </LoaderContainer>
  );

  const childElement = screen.getByText("Child");
  expect(childElement).toBeInTheDocument();

  const loader = screen.queryByRole("status");
  expect(loader).not.toBeInTheDocument();

  const errorMessage = screen.queryByRole("alert");
  expect(errorMessage).not.toBeInTheDocument();
});

test("Shows child content and loader when there is overlay but no error", () => {
  render(
    <LoaderContainer loading overlay>
      <p>Child</p>
    </LoaderContainer>
  );

  const childElement = screen.getByText("Child");
  expect(childElement).toBeInTheDocument();

  const loader = screen.queryByRole("status");
  expect(loader).toBeInTheDocument();

  const errorMessage = screen.queryByRole("alert");
  expect(errorMessage).not.toBeInTheDocument();
});
