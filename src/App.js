import React, { Component } from "react";

import "./App.css";
import SignInButton from "./components/SignInButton/SignInButton";
import SignUpButton from "./components/SignUpButton/SignUpButton";

class App extends Component {
  render() {
    return (
      <div>
        <SignInButton />
        <SignUpButton />
      </div>
    );
  }
}

export default App;
