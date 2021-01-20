import React from "react";

export class Square extends React.Component {
  state = {
    value: "N"
  };
  render() {
    return (
      <button className="square" onClick={() => this.setState({ value: "X" })}>
        {this.state.value}
      </button>
    );
  }
}
