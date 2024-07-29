export const todosReducer = (state = [], { type, payload }) => {
	switch (type) {
		case 'DOWNLOAD_TODOS': {
			return [...payload];
		}

		case 'ADD_TASK': {
			let result = [...state];
			result.push(payload);
			return result;
		}

		case 'CHANGE_TASK': {
			let result = [...state];

			for (const todo of result) {
				if (todo.id === payload.id) {
					todo.title = payload.title;
				}
			}

			return result;
		}

		case 'REMOVE_TASK': {
			let result = [...state];

			result.forEach((el, index) => {
				if (el.id === payload) {
					result.splice(index, 1);
				}
			});

			return result;
		}

		default:
			return state;
	}
};
