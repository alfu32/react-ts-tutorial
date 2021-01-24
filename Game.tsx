import React from "react";
import { Board } from "./Board";
import { MiniBoard } from "./MiniBoard";

export class Game extends React.Component {
  boardRef: React.RefObject<Board>;
  constructor(props) {
    super(props);
    this.boardRef = React.createRef();
  }
  props = {
    title: "default",
    onEnded: gameData => ({})
  };
  static initState = () => ({
    values: new Array(16).fill(null),
    turn: 0,
    history: []
  });
  state: {
    values: Array<string>;
    turn: number;
    history: Array<Array<string>>;
  };
  reset() {
    this.setState(Game.initState());
    this.boardRef && this.boardRef.current
      ? this.boardRef.current.setState({
          values: new Array(16).fill(null)
        })
      : null;
  }
  newGame(): void {
    this.props.onEnded({ ...this.state });
    this.reset();
  }
  UNSAFE_componentWillMount() {
    this.reset();
  }
  onClickSquare({ index, value }) {
    const values = this.state.values.slice();
    if (values[index] !== null) {
      this.onError({
        state: this.state,
        error: "the cell is already taken",
        cell: index
      });
      return;
    }
    const turn = this.state.turn + 1;
    const history = this.state.history.slice();
    history.push(values);
    values[index] = this.state.turn % 2 ? "X" : "0";
    this.setState({ values, turn, history });
    return values[index];
  }
  hasEnded() {
    if (this.state.values.filter(v => v === null).length === 0) {
      return true;
    } else return false;
  }
  onError(error) {}
  render() {
    const hasEnded = this.hasEnded();
    return (
      <div className="game">
        <h4>{this.props.title}</h4>
        <button
          style={{ dislpay: hasEnded ? "none" : null }}
          onClick={() => this.reset()}
        >
          reset
        </button>
        <button
          style={{ dislpay: hasEnded ? null : "none" }}
          onClick={() => this.newGame()}
        >
          new
        </button>
        <Board
          ref={this.boardRef}
          title={"Board"}
          values={this.state.values}
          onClickSquare={square => {
            return this.onClickSquare(square);
          }}
        />
        <div>
          Turn : {this.state.turn} / {this.state.values.length}
        </div>
        <h4>History</h4>
        {this.state.history.map((h, i) => (
          <MiniBoard turn={"" + i} game={h} />
        ))}
      </div>
    );
  }
}
