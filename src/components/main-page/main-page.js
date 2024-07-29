import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AddTask } from '../add-task/add-task';
import { useDebounce } from '../../hooks/use-debounce';
import { useSelector, useDispatch } from 'react-redux';
import { sortingTodos, INITIAL_STATE } from '../../actions';

export const MainPage = () => {
	const [searchItems, setSearchItems] = useState('');
	const [sorted, setSorted] = useState(false);
	const dispatch = useDispatch();

	const todosState = useSelector(({todosState}) => todosState);
	const sortingState = useSelector(({sortingState}) => sortingState)

	const todos = sortingState.length ? sortingState : todosState;

	const debounceSearch = useDebounce(searchItems, 1000);

	const onSorting = () => {
		dispatch(sortingTodos(todos));
		setSorted(true);
	};

	const onDeregister = () => {
		dispatch(INITIAL_STATE)
		setSorted(false);
	};

	const searchProducts = searchItems
		? todos.filter((todo) =>
				todo.title.toLowerCase().includes(debounceSearch.toLowerCase()),
			)
		: todos;

	return (
		<>
			<h1>Список дел</h1>
			<AddTask />

			<div className="wrap">
				<form className="search">
					<input
						className="search__input"
						type="search"
						name="search"
						id="search"
						value={searchItems}
						placeholder="Поиск ..."
						onChange={(e) => setSearchItems(e.target.value)}
					/>
				</form>
				<div className="sorted">
					{sorted ? (
						<button type="button" onClick={onDeregister} className="button">
							Отменить
						</button>
					) : (
						<button type="button" onClick={onSorting} className="button">
							Сортировать
						</button>
					)}
				</div>
			</div>

			{todos.length ? (
				<div className="list">
					{searchProducts.map(({ id, title }) => (
						<Link to={`task/${id}`} key={id} className="item">
							{title}
						</Link>
					))}
				</div>
			) : (
				<p>Добавьте новое дело</p>
			)}
		</>
	);
};
