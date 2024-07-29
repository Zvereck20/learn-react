export const removeTask = (id) => (dispatch) =>
	fetch(`http://localhost:3004/todos/${id}`, {
		method: 'DELETE',
	})
		.then((rawResponse) => rawResponse.json())
		.then((response) => {
			console.log(`Дело № ${id} удалено, ответ сервера:`, response);
			dispatch({
        type: 'REMOVE_TASK',
        payload: id,
      })
		})
		.catch(() => console.log('some DELETE'));
