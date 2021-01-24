import React, { Component } from "react";
import { render } from "react-dom";
import { Game } from "./Game";
import Hello from "./Hello";
import "./style.css";

// STORE -> globalized state
import {createStore} from 'redux';
// ACTION descriptors ( intents ) for real actions {increment, decrement, etc.} -> an intention
const increment = () => {
  return {
    type: 'be.alf.tictactoe.INCREMENT',
  };
}
const decrement = () => {
  return {
    type: 'be.alf.tictactoe.DECREMENT',
  };
}
// REEDUCERS -> descries how actions are goingto transform current state into the next state
const counter = (state = 0, action) => {
  switch(action.type) {
    case 'be.alf.tictactoe.INCREMENT': return state + 1;
    case 'be.alf.tictactoe.DECREMENT': return state - 1;
    default: return state;
  };
};
//  DISPATCH


interface AppProps {}
interface AppState {
  name: string;
  games: Array<object>;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: "React",
      games: new Array()
    };
  }

  render() {
    return (
      <div>
        <div className="counters">
          <h4>Counters</h4>
        </div>
        <Game
          title={"Game"}
          onEnded={gameData => {
            return confirm(
              `game has ended in ${gameData.turn} moves \n play again ?`
            );
          }}
        />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
