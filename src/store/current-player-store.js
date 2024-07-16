import { createStore } from "redux";

const reducer = (state = 'X', action) => {
  const { type } = action;
  const playerNext = state === 'X' ? 'O' : 'X';

  switch (type) {
    case 'CHANGE':
      return playerNext;
    case 'INITIAL':
      return 'X';
    default:
      return state
  }
}

export const currentPlayerStore = createStore(reducer);