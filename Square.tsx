import React from "react";

export class Square extends React.Component {
  props = {
    value: "N"
  };
  render() {
    return (
      <div className="square">
        <h4>{this.props.value}</h4>
      </div>
    );
  }
}
