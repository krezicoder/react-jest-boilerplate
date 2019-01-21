import React, { Component } from "react";

class Button extends Component {
  render() {
    const { name } = this.props;
    return <button className="btn btn-primary m-2">{name}</button>;
  }
}

export default Button;
