import React from "react";
import {
  render,
  cleanup,
  within,
} from "@testing-library/react";
import CardView from "../components/CardView";

beforeEach(cleanup);

describe("<CardView>", () => {
  const launch = [
    {
      image: "https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png",
      name: "FalconSat",
      launchDate: "March 24, 2006",
      cores: false,
    },
    {
      image: "https://images2.imgbox.com/4f/e3/I0lkuJ2e_o.png",
      name: "DemoSat",
      launchDate: "March 21, 2007",
      cores: false,
    },
    {
      image: "https://images2.imgbox.com/3d/86/cnu0pan8_o.png",
      name: "Trailblazer",
      launchDate: "August 3, 2008",
      cores: false,
    },
  ];

  const renderComponent = () => {
    return render(<CardView launch={launch} />);
  };

  const emptyRenderComponent = () => {
    return render(<CardView launch={[]} />);
  };

  test("Checks if data is loaded when component is mounted", () => {
    const { container, getAllByRole } = renderComponent();
    const div = getAllByRole("listitem");

    expect(container.textContent).toMatch("DemoSat");
    expect(div.length).toEqual(3);
  });

  test("Checks if no data is loaded when component is mounted", () => {
    const { getByTestId } = emptyRenderComponent();

    const { getByText } = within(getByTestId("empty-box"));
    expect(getByText("No launches")).toBeTruthy();
  });
});
