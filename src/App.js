import React, { Component } from "react";

import "./App.css";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="container">
          <Input name={"username"} placeholder={"Username"} type={"text"} />
          <Input
            name={"password"}
            placeholder={"*********"}
            type={"password"}
          />
          <div className="row justify-content-center">
            <Button name={"Sign In"} />
            <Button name={"Sign Up"} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
