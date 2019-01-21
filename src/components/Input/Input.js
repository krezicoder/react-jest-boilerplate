import React, { Component } from "react";
class Input extends Component {
  render() {
    const { name, placeholder, type } = this.props;
    return <input type={type} name={name} placeholder={placeholder} />;
  }
}

export default Input;
