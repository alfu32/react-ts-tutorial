export * from "./counters";
export * from "./games";
import {combineReducers} from 'redux';
import { counterReducer } from "./counters";
import { gamesReducer } from "./games";

export const reducers = combineReducers({
  counter: counterReducer,
  games: gamesReducer
});
