import React from "react";

export class Board extends React.Component {
  props = {
    title: "default"
  };
  render() {
    return (
      <div className="board">
        <h4>{this.props.title}</h4>
      </div>
    );
  }
}
