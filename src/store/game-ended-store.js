import { createStore } from "redux";

const reducer = (state = false, action) => {

  switch (action.type) {
    case 'CHANGE':
      return true;
    case 'INITIAL':
      return false;
    default:
      return state;
  }
}

export const gameEndedStore = createStore(reducer);