import PropTypes from 'prop-types';
import { FieldLayout } from './FieldLayout';

export const Field = ({
	field,
	setField,
	currentPlayer,
	isGameEnded,
	setCurrentPlayer,
}) => {
	let result = [...field];

	const cellClick = (index) => {
		if (!result[index].length && !isGameEnded) {
			result[index] = currentPlayer;
			setField(result);
			const player = currentPlayer === 'X' ? 'O' : 'X';
			setCurrentPlayer(player);
		}
	};
	return <FieldLayout field={field} cellClick={cellClick} />;
};

Field.propTypes = {
	field: PropTypes.array,
	setField: PropTypes.func,
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.func,
	isGameEnded: PropTypes.bool,
};
