import React from "react";
import { Square } from "./Square";
import "./Board.css";
interface MiniBoardProps {
  turn: string;
  game: Array<string|null>;
}
interface MiniBoardState {}
export class MiniBoard extends React.Component {
  props: MiniBoardProps;
  render() {
    const size = parseInt(
      '' + Math.sqrt(this.props.game.length)
    );
    const indexes = new Array(size);

    return (
      <div className="mini-board">
        <label>Turn : {this.props.turn}</label>
        <table className="table">
          <tbody className="body">
            {
              indexes.map( (r,i) => (<tr>
                {
                  indexes.map(
                    (c,j) => (<td>
                      {this.props.game[j + size * i]}
                    </td>)
                  )
                }
              </tr>))
            }
          </tbody>
        </table>
      </div>
    );
  }
}
