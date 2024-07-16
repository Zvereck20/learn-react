import { drawStore, gameEndedStore, currentPlayerStore } from '../../store';
import styles from './information.module.css';

export const Information = () => {
	const currentPlayer = currentPlayerStore.getState()
	const isDraw = drawStore.getState()
	const isGameEnded = gameEndedStore.getState()

	let value = `Ходит: ${currentPlayer}`;

	isDraw && (value = 'Ничья');

	if (!isDraw && isGameEnded) {
		value = `Победа: ${currentPlayer}`;
	} else if (!isDraw && !isGameEnded) {
		value = `Ходит: ${currentPlayer}`;
	}

	return (
		<>
			<h2 className={styles.heading}>{value}</h2>
		</>
	);
};