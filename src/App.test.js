import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount } from "enzyme";
import App from "./App";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";

describe("AppMain", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("should render two buttons SignIn, SignUp with Button Component", () => {
    let wrapper = mount(<App />);
    expect(wrapper.find(Button).length).toEqual(2);
    expect(wrapper.text().includes("Sign In")).toBe(true);
    expect(wrapper.text().includes("Sign Up")).toBe(true);
  });

  it("should render Input component", () => {
    let wrapper = mount(<App />);
    expect(wrapper.find(Input).length).toEqual(2);
  });

  it("should render Input box with name=username type=text placeholder=Username", () => {
    let wrapper = mount(<App />);
    expect(
      wrapper
        .find(Input)
        .first()
        .find("input")
        .props().name
    ).toEqual("username");
    expect(
      wrapper
        .find(Input)
        .first()
        .find("input")
        .props().type
    ).toEqual("text");
    expect(
      wrapper
        .find(Input)
        .first()
        .find("input")
        .props().placeholder
    ).toEqual("Username");
  });

  it("should render Input box with name=password type=password placeholder=*********", () => {
    let wrapper = mount(<App />);
    expect(
      wrapper
        .find(Input)
        .last()
        .find("input")
        .props().name
    ).toEqual("password");
    expect(
      wrapper
        .find(Input)
        .last()
        .find("input")
        .props().type
    ).toEqual("password");
    expect(
      wrapper
        .find(Input)
        .last()
        .find("input")
        .props().placeholder
    ).toEqual("*********");
  });
});
