import React, { Component } from "react";

import "./App.css";
import Button from "./components/Button/Button";

class App extends Component {
  render() {
    return (
      <div>
        <Button name={"Sign In"} />
        <Button name={"Sign Up"} />
      </div>
    );
  }
}

export default App;
