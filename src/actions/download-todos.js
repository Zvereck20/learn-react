// const fetchTodosData = async () => {
// 	const loadedData = await fetch('http://localhost:3004/todos');
//   return await loadedData.json();
// };

// export const downloadTodos = () => {
//   return (dispatch) => {
//     fetchTodosData().then((todosData) => {
//       dispatch({
//         type: "DOWNLOAD_TODOS",
//         payload: todosData,
//       });
//     })
//   }
// }
// Для себя оставил!

export const downloadTodos = () => (dispatch) =>
	fetch('http://localhost:3004/todos')
		.then((loadedData) => loadedData.json())
		.then((todosData) => {
			dispatch({
				type: 'DOWNLOAD_TODOS',
				payload: todosData,
			});
		});
