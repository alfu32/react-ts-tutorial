export const createCurrentGame = () => ({
  type: "be.alf.tictactoe.game.CREATE",
});
export const storeCurrentGame = () => ({
  type: "be.alf.tictactoe.game.STORE",
});
export const move = (turn) => ({
  type: "be.alf.tictactoe.game.move.SET",
  payload: {turn}
});
export const undo = (turn) => ({
  type: "be.alf.tictactoe.game.move.BACK",
  payload: {turn}
});