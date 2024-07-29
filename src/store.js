import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { thunk } from "redux-thunk";
import {sortingReducer, todosReducer} from './reducers';

const reducer = combineReducers({
  sortingState: sortingReducer,
  todosState: todosReducer, 
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

store.subscribe(() => console.log(store.getState()))