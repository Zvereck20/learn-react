export const addTask = (task) => (dispatch) =>
  fetch('http://localhost:3004/todos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify({
      title: task,
    }),
  })
    .then((rawResponse) => rawResponse.json())
    .then((response) => {
      console.log(`${task} добавлен, ответ сервера:`, response);
      dispatch({
        type: 'ADD_TASK',
        payload: response,
      })
    })
    .catch(() => console.log('some POST'));
