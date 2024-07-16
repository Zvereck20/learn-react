import { WIN_PATTERNS } from './constant/win-patterns'
import { Field } from './components/Field/Field';
import { Information } from './components/Information/Information';
import { useSelector } from 'react-redux';
import styles from './game.module.css';
import { useDispatch } from 'react-redux';

export const Game = () => {
	const dispatch = useDispatch();

	const currentPlayer = useSelector((state) => state.gameState.currentPlayer);
	const isGameEnded = useSelector((state) => state.gameState.isGameEnded);
	const fields = useSelector((state) => state.fieldsState)

	WIN_PATTERNS.forEach((element) => {
		const playerNext = currentPlayer === 'X' ? 'O' : 'X';

		if (element.every((el) => fields[el] === playerNext)) {
			dispatch({ type: 'SET_GAME_ENDED' })
			dispatch({ type: 'CHANGE_PLAYER' });
		} else if (fields.every((el) => el.length > 0)) {
			dispatch({ type: 'SET_DRAW' });
		}
	});

	const cellClick = (index) => {
		if (!fields[index].length && !isGameEnded) {
			dispatch({ type: `SET_${currentPlayer}`, payload: index })
			dispatch({ type: 'CHANGE_PLAYER' });
		}
	};

	const clearClick = () => {
		dispatch({type: 'INITIAL_FIELDS'});
		dispatch({type: 'INITIAL_GAME'});
	};

	return (
		<div className={styles.wrapper}>
			<Information />
			<Field cellClick={cellClick} />
			<button onClick={clearClick}>Начать заново</button>
		</div>
	);
};
