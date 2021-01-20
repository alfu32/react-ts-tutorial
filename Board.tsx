import React from "react";
import { Square } from "./Square";
import "./Board.css";

export class Board extends React.Component {
  props = {
    title: "default",
    onEnded: endState => {}
  };
  state = {
    values: new Array(16).fill(null),
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
          const values = this.state.values.slice();
          const history = this.state.history.slice();
          history.push(values);
          values[index] = this.state.turn % 2 ? "X" : "0";
          this.setState({ values, turn, history });
          if (this.hasEnded(values)) {
            this.props.onEnded(this.state);
          }
        }}
      />
    );
  }
  hasEnded(values) {
    if (values.filter(v => v === null).length === 0) {
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
