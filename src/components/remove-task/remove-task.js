import { useDispatch } from 'react-redux';
import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';
import { removeTask } from '../../actions';

export const RemoveTask = ({ id }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const onClick = () => {
		dispatch(removeTask(id));
		navigate('/');
	};

	return (
		<button type="button" onClick={onClick} className={styles.button}>
			Удалить
		</button>
	);
};
