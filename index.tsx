import React, { Component } from "react";
import { render } from "react-dom";
import { Game } from "./Game";
import { Counter } from "./Counter";
import Hello from "./Hello";
import "./style.css";
import { Provider, useDispatch } from "react-redux";
// STORE -> globalized state
import { createStore, Unsubscribe } from "redux";
// ACTION descriptors ( intents ) for real actions {increment, decrement, etc.} -> an intention
import { increment, decrement } from "./actions";
// REDUCERS -> descries how actions are goingto transform current state into the next state
import { reducers } from "./reducers";
import { createCurrentGame, storeCurrentGame } from "./actions/games";
import { selectGames } from "./selectors";
import { MiniBoard } from "./MiniBoard";
export const store = createStore(reducers);
// Display it on the console

store.subscribe(() => console.log(store.getState()));

//  DISPATCH
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
export class GameState {
  id: number | null;
  values: Array<string>;
  turn: number;
  history:Array<Array<string>>;

  static initState = () => ({
    id:null,
    values: new Array(16).fill(null),
    turn: 0,
    history: []
  });
}
interface AppProps {}
interface AppState {
  name: string;
  games: { games: Array<GameState>; currentGame: GameState };
  counter: number;
}

class App extends Component<AppProps, AppState> {
  unsubscribe: Unsubscribe;
  constructor(props) {
    super(props);
    this.state = {
      name: "React",
      games: {
        games: new Array(),
        currentGame: {
          id: null,
          values: "x0x0x  x 0 x 0x0".split(""),
          turn: 25,
          history:[],
        }
      },
      counter: 22
    };
  }
  UNSAFE_componentWillMount() {
    this.unsubscribe = selectGames(store, games =>
      this.setState({ name: this.state.name, ...store.getState() })
    );
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  chk() {
    return <Provider store={store} />;
  }
  render() {
    return (
      <div>
        <Counter />
        <div>Counter:{this.state.counter}</div>
        <div>CurrentTurn:{this.state.games.currentGame.turn}</div>
        <div>Games:{this.state.games.games.length}</div>
        <ul>
          {this.state.games.games.map(game => (
            <li>
              Game {game.id} @ turn {game.turn}{" "}
              <MiniBoard turn={"" + game.turn} game={game.values} />
            </li>
          ))}
        </ul>
        <button onClick={() => store.dispatch(storeCurrentGame())}>
          store
        </button>
        <button onClick={() => store.dispatch(createCurrentGame())}>new</button>
        <Game
          title={"Game"}
          onChanged={gameData => {
            store.dispatch(storeCurrentGame());
            // alert(`game has ended in ${gameData.turn} moves \n play again ?`);
            return true;
          }}
        />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
