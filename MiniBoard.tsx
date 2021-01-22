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
    const indexes = new Array(size).fill(0);

    return (
      <div className="mini-board">
        <label>Turn : {this.state.turn}</label>
        <table className="table">
          <tbody className="body">
            {indexes.map((r, i) => (
              <tr>
                {indexes.map((c, j) => (
                  <td>
                    <div data-value={this.state.game[j + size * i]}>
                      {this.state.game[j + size * i]}
                    </div>
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
