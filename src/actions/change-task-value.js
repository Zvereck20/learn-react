export const changeTaskValue = (id, newTitle) => (dispatch) =>
	fetch(`http://localhost:3004/todos/${id}`, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify({
			title: newTitle,
		}),
	})
		.then((rawResponse) => rawResponse.json())
		.then((response) => {
			console.log('Дело обновлено, ответ сервера:', response);
      dispatch({
        type: 'CHANGE_TASK',
        payload: response,
      })
		})
		.catch(() => console.log('some PUT'));
