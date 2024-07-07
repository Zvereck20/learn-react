import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';

export const RemoveTask = ({ id, reoladTodos, setReoladTodos }) => {
	const navigate = useNavigate();

	const onClick = () => {
		fetch(`http://localhost:3004/todos/${id}`, {
			method: 'DELETE',
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('Дело удалено, ответ сервера:', response);
				setReoladTodos(!reoladTodos);
			})
			.catch(() => console.log('some DELETE'))
			.finally(() => navigate('/'));
	};

	return (
		<button type="button" onClick={onClick} className={styles.button}>
			Удалить
		</button>
	);
};
