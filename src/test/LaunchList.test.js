import React from "react";
import { render, cleanup } from "@testing-library/react";
import LaunchList from "../components/LaunchList";
import { getLaunch } from "../components/GetLaunchList";

jest.mock("../components/GetLaunchList");

beforeEach(cleanup);

describe("<LaunchList>", () => {
  const renderComponent = () => {
    return render(<LaunchList />);
  };

  test("Checks if the page is mounted and getLaunch gets called", () => {
    renderComponent();
    expect(getLaunch).toHaveBeenCalledTimes(1);
  });
});
