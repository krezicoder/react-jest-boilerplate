import React, { Component } from "react";

import "./App.css";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="container valign-center">
          <div className="card row col-6">
            <h3>Sign In Form</h3>
            <div className="card-body">
              <div className="row justify-content-center mt-2">
                <Input
                  name={"username"}
                  placeholder={"Username"}
                  type={"text"}
                />
              </div>
              <div className="row justify-content-center mt-2">
                <Input
                  name={"password"}
                  placeholder={"*********"}
                  type={"password"}
                />
              </div>

              <div className="row justify-content-center">
                <Button name={"Sign In"} />
                <Button name={"Sign Up"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
