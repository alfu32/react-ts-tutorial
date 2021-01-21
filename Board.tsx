import React from "react";
import { Square } from "./Square";
import "./Board.css";

export class Board extends React.Component {
  props = {
    title: "default",
    onClickSquare: squareData => {},
    onEnded: endState => {},
    onError: faultState => {},
    values: new Array(16).fill(null)
  };
  renderSquare(index: number) {
    const value = this.props.values ? this.props.values[index] : "?";
    return (
      <Square
        value={value}
        onClick={() => {
          this.props.onClickSquare({ index, value });
        }}
      />
    );
  }
  render() {
    return (
      <div className="board">
        <h4>{this.props.title}</h4>
        <div className="row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
        </div>
        <div className="row">
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
          {this.renderSquare(7)}
        </div>
        <div className="row">
          {this.renderSquare(8)}
          {this.renderSquare(9)}
          {this.renderSquare(10)}
          {this.renderSquare(11)}
        </div>
        <div className="row">
          {this.renderSquare(12)}
          {this.renderSquare(13)}
          {this.renderSquare(14)}
          {this.renderSquare(15)}
        </div>
        <pre>{JSON.stringify(this.state, null, " ")}</pre>
      </div>
    );
  }
}
