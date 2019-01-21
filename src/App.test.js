import React from "react";
import ReactDOM from "react-dom";
import { shallow, mount } from "enzyme";
import App from "./App";
import Button from "./components/Button/Button";

describe("AppMain", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("should render two buttons SignIn, SignUp with Button Component", () => {
    let wrapper = mount(<App />);
    expect(wrapper.find(Button).length).toEqual(2);
    expect(wrapper.text()).toEqual("Sign InSign Up");
  });
});
