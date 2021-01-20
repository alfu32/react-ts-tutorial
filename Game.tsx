import React from "react";
import { Board } from "./Board";

export class Game extends React.Component {
  props = {
    title: "default"
  };
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
