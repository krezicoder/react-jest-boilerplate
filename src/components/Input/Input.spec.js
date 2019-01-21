import React from "react";
import { shallow, mount } from "enzyme";
import Input from "./Input";

describe("InputComponent", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Input />);
  });

  it("should render input box", () => {
    wrapper = mount(<Input />);
    expect(wrapper.find("input").length).toEqual(1);
  });
});
