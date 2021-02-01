export class GameState {
  id: number | null;
  size: number;
  values: Array<string>;
  turn: number;
  history:Array<Array<string>>;
  constructor(size: number = 4){
    this.id = null;
    this.size = size;
    this.turn = 0;
    this.values = new Array(size * size).fill(null);
    this.history = [];
  }
  clone(){
    return {
      id:this.id,
      turn:this.turn,
      values:this.values,
      history:[...this.history],
    }
  }
  static clone(gameState) {
    const newGameState = new GameState(gameState.size);
    newGameState.id = gameState.id;
    newGameState.turn = gameState.turn;
    newGameState.values = [...gameState.values];
    newGameState.history = [...gameState.history];
    return newGameState;
  }
  static initState = (size: number) => (new GameState(size));
}
export const GameStateClone = (state)=>{return GameState.clone(state);}
interface AppProps {}
interface AppState {
  name: string;
  games: { games: Array<GameState>; currentGame: GameState };
  counter: number;
}