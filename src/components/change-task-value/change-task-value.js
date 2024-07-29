import { useState } from 'react';
import styles from './styles.module.css';
import { changeTaskValue } from '../../actions/change-task-value';
import { useDispatch } from 'react-redux';

export const ChangeTaskValue = ({ id }) => {
	const [isChange, setIsChange] = useState(false);
	const [value, setValue] = useState('');
	const dispatch = useDispatch();

	const onSubmit = (e) => {
		e.preventDefault();

		dispatch(changeTaskValue(id, value));

		setValue('');
		setIsChange(false);
	};

	return (
		<div>
			{!isChange ? (
				<button className={styles.button} onClick={() => setIsChange(true)}>
					Изменить
				</button>
			) : (
				<form onSubmit={onSubmit}>
					<input
						className={styles.input}
						type="text"
						name="newValue"
						id="newValue"
						onChange={({ target }) => setValue(target.value)}
						value={value}
					/>
					<button type="submit" className={styles.submit}>
						Сохранить
					</button>
				</form>
			)}
		</div>
	);
};
