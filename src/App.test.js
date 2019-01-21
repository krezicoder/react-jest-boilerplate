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
    expect(wrapper.find(Input).length).toEqual(1);
  });
});
