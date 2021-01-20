import React from "react";
import { Square } from "./Square";
import "./Board.css";

export class Board extends React.Component {
  props = {
    title: "default",
    onEnded: endState => {}
  };
  state = {
    values: new Array(9),
    turn: 0,
    history: []
  };
  renderSquare(index: number) {
    const val = this.state.values ? this.state.values[index] : "?";
    return (
      <Square
        value={val}
        onClick={() => {
          const turn = this.state.turn + 1;
          const old = this.state.values.slice();
          const values = this.state.values.slice();
          const history = this.state.history.slice();
          history.push(old);
          values[index] = this.state.turn % 2 ? "X" : "0";
          this.setState({ values, turn, history });
          if (this.hasEnded()) {
            this.props.onEnded(this.state);
          }
        }}
      />
    );
  }
  hasEnded() {
    if (this.state.turn === 9) {
      return true;
    } else return false;
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
