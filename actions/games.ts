export const createCurrentGame = (size) => ({
  type: "be.alf.tictactoe.game.CREATE",
  payload:{ size }
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
export const move = (state) => ({
  type: "be.alf.tictactoe.game.move.SET",
  payload: { ...state }
});
export const undo = (turn)  => ({
  type: "be.alf.tictactoe.game.move.BACK",
  payload: { turn }
});
