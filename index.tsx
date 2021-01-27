import React, { Component } from "react";
import { render } from "react-dom";
import { Game } from "./Game";
import { Counter } from "./Counter";
import Hello from "./Hello";
import "./style.css";
import { Provider, useDispatch } from "react-redux";
// STORE -> globalized state
import { createStore } from "redux";
// ACTION descriptors ( intents ) for real actions {increment, decrement, etc.} -> an intention
import { increment, decrement } from "./actions";
// REDUCERS -> descries how actions are goingto transform current state into the next state
import { reducers } from "./reducers";
export const store = createStore(reducers);
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
  chk(){
    return (<Provider store={store}></Provider>);
  }
  render() {
    return (
        <div>
          <Counter />
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
