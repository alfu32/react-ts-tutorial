import React from "react";

export class Board extends React.Component {
  props = {
    title: "default",
    values: ["-", "-", "-", "-", "-", "-", "-", "-", "-"]
  };
  render() {
    return (
      <div className="board">
        <h4>{this.props.title}</h4>
        <div className="row">
          <Square value={this.props.values[0]} />
          <Square value={this.props.values[1]} />
          <Square value={this.props.values[2]} />
        </div>
        <div className="row">
          <Square value={this.props.values[3]} />
          <Square value={this.props.values[4]} />
          <Square value={this.props.values[5]} />
        </div>
        <div className="row">
          <Square value={this.props.values[6]} />
          <Square value={this.props.values[7]} />
          <Square value={this.props.values[8]} />
        </div>
      </div>
    );
  }
}
