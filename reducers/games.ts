export const gamesReducer = (
  state = {
    games: [],
    currentGame: { values: new Array(16).fill(null), turn: 0, history: [] }
  },
  action
) => {
  state.games = state.games || [];
  let nextCurrentGameState = { ...state.currentGame };
  const currentGameValues = [...state.currentGame.values];
  switch (action.type) {
    case "be.alf.tictactoe.game.CREATE":
      state.currentGame = {
        values: new Array(16).fill(null),
        turn: 0,
        history: []
      };
    case "be.alf.tictactoe.game.STORE":
      state.games = state.games.concat([state.currentGame]);
    case "be.alf.tictactoe.game.LOAD":
      state.games = state.games.concat([state.currentGame]);
    case "be.alf.tictactoe.game.move.SET":
      nextCurrentGameState.turn++;
      nextCurrentGameState.history = nextCurrentGameState.history.concat(
        currentGameValues
      );
      nextCurrentGameState.values[state.currentGame.turn] =
        state.currentGame.turn % 2 ? "X" : "0";
      state.currentGame = { ...nextCurrentGameState };
      return state;
    case "be.alf.tictactoe.game.move.BACK":

    default:
      return state;
  }
};
