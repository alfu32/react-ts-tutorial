import React, { Component } from "react";
import { increment, decrement } from "./actions";
import {store} from './';

export interface CounterState {
  counter: number;
}
export interface CounterProps {
  counterValue: number;
}

export class Counter extends React.Component {
  subscription = store.subscribe(() => this.setState({counter:store.getState().counter}));
  render(){
    return (
    <div className="counters">
      <h4>Counter {this.state?.counter||0}</h4>
      <button onClick={() => store.dispatch(increment())}>+</button>
      <button onClick={() => store.dispatch(decrement())}>-</button>
    </div>
  );
  }
};
