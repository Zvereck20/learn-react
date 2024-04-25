import PropTypes from 'prop-types';
import styles from './game.module.css';
import { Field } from './components/Field/Field';
import { Information } from './components/Information/Information';

export const GameLayout = ({
	field,
	isDraw,
	isGameEnded,
	currentPlayer,
	setField,
	setCurrentPlayer,
	clearClick,
}) => (
	<div className={styles.wrapper}>
		<Information
			isDraw={isDraw}
			isGameEnded={isGameEnded}
			currentPlayer={currentPlayer}
		/>
		<Field
			field={field}
			setField={setField}
			currentPlayer={currentPlayer}
			setCurrentPlayer={setCurrentPlayer}
			isGameEnded={isGameEnded}
		/>
		<button className={styles.button} onClick={clearClick}>
			Начать заново
		</button>
	</div>
);

GameLayout.propTypes = {
	field: PropTypes.array,
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	currentPlayer: PropTypes.string,
	setField: PropTypes.func,
	setCurrentPlayer: PropTypes.func,
	clearClick: PropTypes.func,
};
