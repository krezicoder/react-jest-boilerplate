import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount } from "enzyme";
import App from "./App";
import SignInButton from "./components/SignInButton/SignInButton";
import SignUpButton from "./components/SignUpButton/SignUpButton";

describe("AppMain", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("should render a signIn button in App", () => {
    let wrapper = shallow(<App />);
    expect(wrapper.containsMatchingElement(<SignInButton />)).toEqual(true);
  });

  it("should render a signUp button in App", () => {
    let wrapper = shallow(<App />);
    expect(wrapper.containsMatchingElement(<SignUpButton />)).toEqual(true);
  });

  it("should render two buttons SignIn, SignUp with Button Component", () => {
    let wrapper = mount(<App />);
    expect(wrapper.find(Button).length).toEqual(2);
  });
});
