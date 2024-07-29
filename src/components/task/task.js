import { useNavigate, useParams } from 'react-router-dom';
import { RemoveTask } from '../remove-task/remove-task';
import styles from './styles.module.css';
import { ChangeTaskValue } from '../change-task-value/change-task-value';
import { useSelector } from 'react-redux';

export const Task = () => {
	const todos = useSelector(({ todosState }) => todosState);
	const params = useParams();
	const navigate = useNavigate();

	let id, title;

	if (todos.length) {
		const item = todos.filter((todo) => todo.id === params.id);
		id = item[0].id;
		title = item[0].title;
	}

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
				<ChangeTaskValue id={id} />
				<RemoveTask id={id} />
			</div>
		</>
	);
};
