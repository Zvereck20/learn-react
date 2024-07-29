import { useState } from 'react';
import styles from './styless.module.css';
import { useDispatch } from 'react-redux';
import { addTask } from '../../actions';

export const AddTask = () => {
	const [value, setValue] = useState('');
	const dispatch = useDispatch();

	const onSubmit = (event) => {
		event.preventDefault();
		dispatch(addTask(value));
		setValue('');
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
