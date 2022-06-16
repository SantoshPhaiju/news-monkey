import React, { Component } from "react";

export default class Clock extends Component {
  constructor() {
    super();
    this.state = {
      ctime: new Date().toLocaleTimeString(),
    };
  }

  updateTime = () => {
    this.setState({
      ctime: new Date().toLocaleTimeString(),
    });
  };

  render() {
    setInterval(this.updateTime, 1000);
    return (
      <div>
        <h1>{this.state.ctime}</h1>
      </div>
    );
  }
}
