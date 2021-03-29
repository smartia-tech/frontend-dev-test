import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { shallow } from "enzyme";
import CardComponent from "../CardComponent";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders card details", async () => {
    const fakeData = {
        name: 'test rocket',
        links: {
            patch: {
                small: 'https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png'
            }
        },
        date_local: '2006-03-25T10:30:00+12:00',
        cores: [
          {
            landing_success: false
          }
        ]
    }

    act(() => {
      render(<CardComponent launch={fakeData} />, container);
    });
    let wrapper = shallow(<CardComponent/>);
    const instance = wrapper.instance();

    let date = instance.convertDate(fakeData.date_local)

    console.log(container.querySelector(".launch-name").textContent)
  
    expect(container.querySelector(".launch-name").textContent).toBe(fakeData.name);
    expect(container.querySelector(".launch-date").textContent).toBe(date);
  });
  