import { useContext, useState } from 'react';
import styles from './styless.module.css';
import { TodosContext } from '../../context';

export const AddTask = () => {
	const [value, setValue] = useState('');

	const { reoladTodos, setReoladTodos } = useContext(TodosContext);

	const onSubmit = (event) => {
		event.preventDefault();

		fetch('http://localhost:3004/todos', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				title: value,
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log(`${value} добавлен, ответ сервера:`, response);
				setValue('');
			})
			.catch(() => console.log('some POST'))
			.finally(() => setReoladTodos(!reoladTodos));
	};

	return (
		<div>
			<form onSubmit={onSubmit} className={styles.form}>
				<input
					className={styles.input}
					type="text"
					name="addTask"
					id="addTask"
					value={value}
					placeholder="..."
					onChange={({ target }) => setValue(target.value)}
				/>
				<button type={styles.submit} className={styles.submit}>
					Добавить дело
				</button>
			</form>
		</div>
	);
};
