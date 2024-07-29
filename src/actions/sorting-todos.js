export const sortingTodos = (todos) => {
	const result = [...todos];
	
	result.sort(function (a, b) {
		if (a.title < b.title) {
			return -1;
		}
		if (a.title > b.title) {
			return 1;
		}
		return 0;
	});


	return {
		type: 'SORTING_TODOS',
		payload: result,
	};
};
