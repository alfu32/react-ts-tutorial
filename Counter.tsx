import React, { Component } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

export interface CounterState {
  counter: number;
}
export interface CounterProps {
  counterValue: number;
}

export const Counter = props => {
  const state: CounterState = {
    counter: useSelector(state => state.counter)
  };
  return (
    <div className="counters">
      <h4>Counters {state.counter}</h4>
      <button onClick={() => useDispatch(increment())}>+</button>
      <button onClick={() => useDispatch(decrement())}>-</button>
    </div>
  );
};
