export const gamesReducer = (
  state = {
    games: [],
    currentGame: { id:null, values: new Array(16).fill(null), turn: 0, history: [] }
  },
  action
) => {
  state.games = state.games || [];

    let nextCurrentGameState={
      id:state.currentGame.id,
      turn:state.currentGame.turn,
      values:state.currentGame.values,
      history:[...state.currentGame.history],
    }
  const currentGameValues = [...state.currentGame.values];
  switch (action.type) {
    case "be.alf.tictactoe.game.CREATE":
      state.currentGame = {
        id:null,
        values: new Array(16).fill(null),
        turn: 0,
        history: []
      };
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
      nextCurrentGameState.turn++;
      nextCurrentGameState.history = nextCurrentGameState.history.concat(
        currentGameValues
      );
      nextCurrentGameState.values[action.payload.index] =
        state.currentGame.turn % 2 ? "X" : "0";
      state.currentGame = { ...nextCurrentGameState };
      state = { ...state };
      return state;
    case "be.alf.tictactoe.game.move.BACK":

    default:
      return state;
  }
};
