import React, { Component } from "react";

import "./App.css";
import Button from "./components/Button/Button";

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="container">
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
