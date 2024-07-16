const initialState = ['', '', '', '', '', '', '', '', ''];

export const fieldsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  let result = [...state];

  switch (type) {
    case 'SET_X':
      result[payload] = 'X';
      return result;
    case 'SET_O':
      result[payload] = 'O';
      return result;
    case 'INITIAL_FIELDS':
      result = [...initialState];
      return result;
    default:
      return state
  }
}