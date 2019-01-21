import React, { Component } from "react";

import "./App.css";
import SignInButton from "./components/SignInButton/SignInButton";
import SignUpButton from "./components/SignUpButton/SignUpButton";
import Button from "./components/Button/Button";

class App extends Component {
  render() {
    return (
      <div>
        <SignInButton />
        <SignUpButton />
        <Button />
        <Button />
      </div>
    );
  }
}

export default App;
