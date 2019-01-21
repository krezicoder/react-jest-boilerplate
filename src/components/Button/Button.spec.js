import React from "react";
import { shallow } from "enzyme";
import Button from "./Button";

describe("ButtonComponent", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Button />);
  });

  it("should render button name", () => {
    wrapper.setProps({ name: "test" });
    expect(wrapper.text()).toEqual("test");
  });
});
