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
export async function sleep<T>(duration,arg: T) {
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(arg);
    },duration);
  });
}
export class ActionChain extends React.Component {
  unsubscribe: Unsubscribe;
  state={
    counter:-1,
    chainStep:0,
    counting: false,
  }
  UNSAFE_componentWillMount(){
    this.unsubscribe = store.subscribe(() => this.setState({counter:store.getState().counter}));
  }
  componentWillUnmount(){
    this.unsubscribe();
  }
  async chain(){
    await sleep(3000,0);
    new Array(10).fill(Promise.resolve(-1))
      .map( async (v,i) => {
          this.setState({chainStep: i});
          console.log(this.state);
          return await sleep<number>(10000,i);
      });
  }
  render(){
    return (
    <div className="counters">
      <button onClick={() => this.chain()}>start</button>
      <button onClick={() => store.dispatch(decrement())}>stop</button>
      <strong>ChainStep {this.state?.chainStep}</strong>
    </div>
  );
  }
};