import { useNavigate } from 'react-router-dom';
import { useParams, Link } from 'react-router-dom';
import { RemoveTask } from '../remove-task/remove-task';
import styles from './styles.module.css';
import { ChangeTaskValue } from '../change-task-value/change-task-value';

export const Task = ({ todos, reoladTodos, setReoladTodos }) => {
	const params = useParams();

	const item = todos.filter((todo) => todo.id === params.id);
	const { id, title } = item[0];
	const navigate = useNavigate();

	return (
		<>
			<h1>Запланированное дело</h1>
			<button
				type="button"
				className={styles.back}
				title="Назад"
				onClick={() => navigate(-1)}
			>
				↢
			</button>
			<div className={styles.item}>{title}</div>
			<div className={styles.wrap}>
				<ChangeTaskValue
					id={id}
					reoladTodos={reoladTodos}
					setReoladTodos={setReoladTodos}
				/>
				<RemoveTask id={id} />
			</div>
		</>
	);
};
