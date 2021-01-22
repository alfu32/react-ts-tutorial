import React from "react";
import { Square } from "./Square";
import "./MiniBoard.css";
interface MiniBoardProps {
  turn: string;
  game: Array<string | null>;
}
interface MiniBoardState {
  turn: string;
  game: Array<string | null>;
}
export class MiniBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
  }
  props: MiniBoardProps;
  state: MiniBoardState;
  render() {
    const size = parseInt("" + Math.sqrt(this.state.game.length));
    const indexes = new Array(size);

    return (
      <div className="mini-board">
        <div>
          {size}x{size} Game
        </div>
        <label>Turn : {this.state.turn}</label>
        <div>{indexes.join(".")}</div>
        <table className="table">
          <tbody className="body">
            {indexes.map((r, i) => (
              <tr>
                {indexes.map((c, j) => (
                  <td>
                    ({i},{j}){this.props.game[j + size * i]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
