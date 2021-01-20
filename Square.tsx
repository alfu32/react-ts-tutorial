import React from "react";

export class Square extends React.Component {
  props = {
    onClick: function() {},
    value: ""
  };
  render() {
    return (
      <button className="square" onClick={this.props.onClick}>
        {this.props.value}
      </button>
    );
  }
}
