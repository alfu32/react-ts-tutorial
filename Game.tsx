import React from "react";

export class Game extends React.Component {
  props={
    title:'default',
  }
  render() {
    return (
      <div className="game">
        <h4>{this.props.title}</h4>
      </div>
    );
  }
}