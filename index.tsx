import React, { Component } from "react";
import { render } from "react-dom";
import { Game } from "./Game";
import Hello from "./Hello";
import "./style.css";

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>Start editing to see some magic happen :)</p>
        <Game title={"Game"} />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
