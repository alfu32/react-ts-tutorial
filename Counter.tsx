import React, { Component } from "react";
import { increment, decrement } from "./actions";
import {store} from './';
import { Unsubscribe } from "redux";

export interface CounterState {
  counter: number;
}
export interface CounterProps {
  counterValue: number;
}

export class Counter extends React.Component {
  unsubscribe: Unsubscribe;
  
  UNSAFE_componentWillMount(){
    this.unsubscribe = store.subscribe(() => this.setState({counter:store.getState().counter}));
  }
  componentWillUnmount(){
    this.unsubscribe();
  }
  render(){
    return (
    <div className="counters">
      <button onClick={() => store.dispatch(increment())}>+</button>
      <button onClick={() => store.dispatch(decrement())}>-</button>
      <strong>Counter {this.state?.counter}</strong>
    </div>
  );
  }
};
