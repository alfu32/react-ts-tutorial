import React, { Component } from "react";
import { render } from "react-dom";
import { Game } from "./Game";
import Hello from "./Hello";
import "./style.css";

// STORE -> globalized state
import { createStore } from "redux";
// ACTION descriptors ( intents ) for real actions {increment, decrement, etc.} -> an intention
import {increment, decrement} from './actions';
// REDUCERS -> descries how actions are goingto transform current state into the next state
import {counterReducer} from './reducers';
const store = createStore(counterReducer);
// Display it on the console

store.subscribe(() => console.log(store.getState()));

//  DISPATCH
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());

interface AppProps {}
interface AppState {
  name: string;
  games: Array<object>;
  counter: number;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: "React",
      games: new Array(),
      counter: store.getState()
    };
    store.subscribe(() => {
      const newState = { ...this.state };
      newState.counter = store.getState();
      this.setState(newState);
    });
  }

  render() {
    return (
      <div>
        <div className="counters">
          <h4>Counters {this.state.counter}</h4>
          <button onClick={() => store.dispatch(increment())}>+</button>
          <button onClick={() => store.dispatch(decrement())}>-</button>
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
