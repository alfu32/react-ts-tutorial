export const gamesReducer = (state = null, action) => {
  switch (action.type) {
case "be.alf.tictactoe.game.CREATE":
  state.games = state.games || [];
  state.currentGame={
    values: new Array(16).fill(null),
    turn: 0,
    history: []
  }
case "be.alf.tictactoe.game.STORE":
  state.games = state.games || [];
  state.games = state.games.concat([state.currentGame])
case "be.alf.tictactoe.game.move.SET":
  const nextCurrentGameState = {...state.currentGame};
  const currentGameValues = [...state.currentGame.values];
  nextCurrentGameState.turn++;
  nextCurrentGameState.history = nextCurrentGameState.history.concat(currentGameValues);
  nextCurrentGameState.values[state.currentGame.turn] = state.currentGame.turn % 2 ? "X" : "0";
  state.currentGames = {...nextCurrentGameState};
  return state;
case "be.alf.tictactoe.game.move.BACK":
  state.games = state.games 
    default:
      return state;
  }
};