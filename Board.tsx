import React from "react";
import { Square } from "./Square";
import "./Board.css";

export class Board extends React.Component {
  props = {
    title: "default",
  };
  state = {
    values: ["-", "-", "-", "-", "-", "-", "-", "-", "-"]
  };
  renderSquare(index: number) {
    const val = this.state.values ? this.state.values[index] : "?";
    return <Square value={val} />;
  }
  render() {
    return (
      <div className="board">
        <h4>{this.props.title}</h4>
        <div className="row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
