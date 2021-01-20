import React from "react";
import { Square } from "./Square";
import "./Board.css";

export class Board extends React.Component {
  props = {
    title: "default"
  };
  state = {
    values: ["-", "-", "-", "-", "-", "-", "-", "-", "-"],
    turn: false
  };
  renderSquare(index: number) {
    const val = this.state.values ? this.state.values[index] : "?";
    return (
      <Square
        value={val}
        onClick={() => {
          const turn = !this.state.turn;
          const values = this.state.values.slice();
          values[index] = this.state.turn ? "X" : "0";
          this.setState({ values, turn });
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
        <pre>{JSON.stringify(this.state, null, " ")}</pre>
      </div>
    );
  }
}
