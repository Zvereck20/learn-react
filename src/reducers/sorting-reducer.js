export const sortingReducer = (state = [], { type, payload }) => {
	switch (type) {
		case 'SORTING_TODOS': {
			return payload;
		}

		case'INITIAL_STATE': {
			return payload;
		}

		default:
			return state;
	}
};
