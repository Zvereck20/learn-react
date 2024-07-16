import { combineReducers, createStore } from "redux";
import { fieldsReducer, gameReducer } from './reducers'

const reducer = combineReducers({
  fieldsState: fieldsReducer,
  gameState: gameReducer,
})

export const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()))