import App from "app/routes";
import { setup, screen } from "./setup";

test("Shows app name: Space Archive)", () => {
  setup(<App />);
  const appName = screen.getByText(/space archive/i);
  expect(appName).toBeInTheDocument();
});
