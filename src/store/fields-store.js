import { createStore } from "redux";

const initialState = ['', '', '', '', '', '', '', '', ''];

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  const result = [...state];

  switch (type) {
    case 'SET_X':
      result[payload] = 'X';
      return result;
    case 'SET_O':
      result[payload] = 'O';
      return result;
    case 'INITIAL':
      state = [...initialState];
      return state;
    default:
      return state
  }
}

export const fieldsStore = createStore(reducer);