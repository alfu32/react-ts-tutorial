
import { GameState, GameStateClone } from "../GameState";

export const gamesReducer = (
  state = {
    games: [],
    currentGame: {id:null,turn:0,size:3,values:new Array(9),history:[]}
  },
  action
) => {
  state.games = state.games || [];
  let nextCurrentGameState=GameStateClone(state.currentGame);
  switch (action.type) {
    case "be.alf.tictactoe.game.CREATE":
      state.currentGame = new GameState(action.payload.size);
      return state;
    case "be.alf.tictactoe.game.STORE":
      if(nextCurrentGameState.id === null ) {
        nextCurrentGameState.id = state.games.length;
        state.games = state.games.concat(nextCurrentGameState);
      }
      state.games = state.games.map(
        (game) => {
          if(game.id === nextCurrentGameState.id ){
            return nextCurrentGameState;
          }else{
            return game;
          }
        }
      )
      state = { ...state };
      return state;
    case "be.alf.tictactoe.game.LOAD":
      state.games = state.games.concat([state.currentGame]);
      return state;
    case "be.alf.tictactoe.game.move.SET":
      console.log({
        received: action.payload
      })
      state.currentGame = { ...action.payload };
      state = { ...state };
      return state;
    case "be.alf.tictactoe.game.move.BACK":

    default:
      return state;
  }
};
