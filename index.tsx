import React, { Component } from "react";
import { render } from "react-dom";
import { Game } from "./Game";
import Hello from "./Hello";
import "./style.css";

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
