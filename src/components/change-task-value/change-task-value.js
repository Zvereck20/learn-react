import { useState } from 'react';
import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';

export const ChangeTaskValue = ({ id }) => {
	const [isChange, setIsChange] = useState(false);
	const [value, setValue] = useState('');
	const navigate = useNavigate();

	const onSubmit = (e) => {
		e.preventDefault();
		fetch(`http://localhost:3004/todos/${id}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				title: value,
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('Дело обновлено, ответ сервера:', response);
				setValue('');
				navigate(0);
			})
			.catch(() => console.log('some PUT'))
			.finally(() => setIsChange(false));
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
