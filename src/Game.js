import { useState } from 'react';
import { WIN_PATTERNS } from './constant/win-patterns'
import { Field } from './components/Field/Field';
import { Information } from './components/Information/Information';
import { fieldsStore, drawStore, gameEndedStore, currentPlayerStore } from './store';
import styles from './game.module.css';

export const Game = () => {
	const [refresh, setRefresh] = useState(true);

	const currentPlayer = currentPlayerStore.getState()
	const isGameEnded = gameEndedStore.getState();
	const fields = fieldsStore.getState();

	WIN_PATTERNS.forEach((element) => {
		const playerNext = currentPlayer === 'X' ? 'O' : 'X';

		if (element.every((el) => fields[el] === playerNext)) {
			gameEndedStore.dispatch({ type: 'CHANGE' })
			currentPlayerStore.dispatch({ type: 'CHANGE' });
		} else if (fields.every((el) => el.length > 0)) {
			drawStore.dispatch({ type: 'CHANGE' });
		}
	});

	const cellClick = (index) => {
		if (!fields[index].length && !isGameEnded) {
			fieldsStore.dispatch({ type: `SET_${currentPlayer}`, payload: index })
			currentPlayerStore.dispatch({ type: 'CHANGE' });
			setRefresh(!refresh);
		}
	};

	const clearClick = () => {
		drawStore.dispatch({ type: 'INITIAL' })
		fieldsStore.dispatch({ type: 'INITIAL' })
		gameEndedStore.dispatch({ type: 'INITIAL' })
		currentPlayerStore.dispatch({ type: 'INITIAL' });
		setRefresh(!refresh);
	};

	return (
		<div className={styles.wrapper}>
			<Information />
			<Field cellClick={cellClick} />
			<button onClick={clearClick}>Начать заново</button>
		</div>
	);
};
