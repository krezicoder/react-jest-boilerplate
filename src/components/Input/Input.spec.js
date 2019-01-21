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

  it("should render input box with name, type, placeholder", () => {
    wrapper = mount(<Input />);
    wrapper.setProps({
      name: "username",
      placeholder: "Username",
      type: "text"
    });
    expect(wrapper.find("input").props().name).toEqual("username");
    expect(wrapper.find("input").props().placeholder).toEqual("Username");
    expect(wrapper.find("input").props().type).toEqual("text");
  });
});
