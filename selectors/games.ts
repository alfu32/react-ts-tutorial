export const selectGames = (store,thenFn)=>store.subscribe(()=>thenFn(store.getState().games));
export const selectGamesHistory = (store,thenFn)=>store.subscribe(()=>thenFn(store.getState().games.games));
export const selectCurrentGame = (store,thenFn)=>store.subscribe(()=>thenFn(store.getState().games.currentGame));