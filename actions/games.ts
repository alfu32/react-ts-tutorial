export const createCurrentGame = () => ({
  type: "be.alf.tictactoe.game.CREATE"
});
export const storeCurrentGame = () => ({
  type: "be.alf.tictactoe.game.STORE"
});
export const restoreSavedGame = (index) => ({
  type: "be.alf.tictactoe.game.LOAD",
  payload:{
    index,
  }
});
export const move = (index) => ({
  type: "be.alf.tictactoe.game.move.SET",
  payload: { index }
});
export const undo = (turn)  => ({
  type: "be.alf.tictactoe.game.move.BACK",
  payload: { turn }
});
