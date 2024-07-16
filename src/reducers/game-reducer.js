const initialState = {
  currentPlayer: 'X',
  isDraw: false,
  isGameEnded: false,
}

export const gameReducer = (state = initialState, action) => {
  const playerNext = state.currentPlayer === 'X' ? 'O' : 'X';

  switch (action.type) {
    case 'CHANGE_PLAYER':
      return {
        ...state,
        currentPlayer: playerNext,
      }

    case 'SET_DRAW':
      return {
        ...state,
        isDraw: true,
      }

    case 'SET_GAME_ENDED':
      return {
        ...state,
        isGameEnded: true,
      }

    case 'INITIAL_GAME':
      return {
        ...initialState
      }

    default:
      return state;
  }
}