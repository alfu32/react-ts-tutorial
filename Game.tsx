import React from "react";
import { Board } from "./Board";

export class Game extends React.Component {
  props = {
    title: "default",
    onEnded: gameData => ({})
  };
  state = {
    values: new Array(16).fill(null),
    turn: 0,
    history: []
  };
  squareClick(index: number) {
    const values = this.state.values.slice();
    if (values[index] !== null) {
      this.onError({
        state: this.state,
        error: "the cell is already taken",
        cell: index
      });
      return;
    }
    const turn = this.state.turn + 1;
    const history = this.state.history.slice();
    history.push(values);
    values[index] = this.state.turn % 2 ? "X" : "0";
    this.setState({ values, turn, history });
    if (this.hasEnded(values)) {
      this.props.onEnded(this.state);
    }
  }
  hasEnded(values) {
    if (values.filter(v => v === null).length === 0) {
      return true;
    } else return false;
  }
  onError(error) {}
  render() {
    return (
      <div className="game">
        <h4>{this.props.title}</h4>
        <Board
          title={"Board"}
          onEnded={finalState => {
            alert(`the game has ended in ${finalState.turn} moves`);
          }}
        />
      </div>
    );
  }
}
