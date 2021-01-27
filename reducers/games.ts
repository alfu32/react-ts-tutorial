export const gamesReducer = (state = 0, action) => {
  switch (action.type) {
case "be.alf.tictactoe.game.CREATE":
  state.games = state.games || [{...state.currentGame}];
  state.currentGame={
    values: new Array(16).fill(null),
    turn: 0,
    history: []
  }
case "be.alf.tictactoe.game.STORE":
  state.games = state.games 
case "be.alf.tictactoe.game.move.SET":
  state.games = state.games 
case "be.alf.tictactoe.game.move.BACK":
  state.games = state.games 
    default:
      return state;
  }
};