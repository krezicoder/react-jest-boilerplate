import React, { Component } from "react";

class Button extends Component {
  render() {
    const { name } = this.props;
    return <button>{name}</button>;
  }
}

export default Button;
