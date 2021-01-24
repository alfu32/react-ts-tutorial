export const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "be.alf.tictactoe.INCREMENT":
      return state + 1;
    case "be.alf.tictactoe.DECREMENT":
      return state - 1;
    default:
      return state;
  }
};
