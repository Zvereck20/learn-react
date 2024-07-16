// import { drawStore, gameEndedStore, currentPlayerStore } from '../../store';
import { useSelector } from 'react-redux';
import styles from './information.module.css';

export const Information = () => {
	const currentPlayer = useSelector((state) => state.gameState.currentPlayer);
	const isDraw = useSelector((state) => state.gameState.isDraw);
	const isGameEnded = useSelector((state) => state.gameState.isGameEnded);

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