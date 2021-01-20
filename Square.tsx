import React from "react";

export class Square extends React.Component {
  props = {
    value: "default"
  };
  render() {
    return (
      <div className="board">
        <h4>{this.props.value}</h4>
      </div>
    );
  }
}
