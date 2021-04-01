import mockAxios from "jest-mock-axios";
// import mockAxios from "axios";

import App from "app/routes";
import { setup, screen, waitFor } from "tests/setup";
import { pastLauches } from "tests/data";

afterEach(() => {
  mockAxios.reset();
  // mockAxios.create().post.mockClear();
});

test("Shows app name: Space Archive)", () => {
  setup(<App />);
  const appName = screen.getByText(/space archive/i);
  expect(appName).toBeInTheDocument();
});

test("Shows error when an issue occures when fetching launches", async () => {
  setup(<App />);

  mockAxios.post.mockRejectedValue(new Error("Network Error"));

  const errorMessage = await screen.findByRole("alert");
  expect(errorMessage).toBeInTheDocument();
});

test("Fetches past space launches", async () => {
  mockAxios.post.mockResolvedValueOnce({
    data: pastLauches,
  });

  setup(<App />);

  await waitFor(() => {
    expect(mockAxios.post).toHaveBeenCalled();
  });

  await waitFor(() => {
    expect(screen.queryByRole("status")).not.toBeInTheDocument();
  });

  const launches = await screen.findByRole("feed");
  expect(launches).toBeInTheDocument();
});
