import PropTypes from 'prop-types';
import { InformationLayout } from './InformationLayout';

export const Information = ({ isDraw, isGameEnded, currentPlayer }) => {
	let value = `Ходит: ${currentPlayer}`;

	isDraw && (value = 'Ничья');

	if (!isDraw && isGameEnded) {
		value = `Победа: ${currentPlayer}`;
	} else if (!isDraw && !isGameEnded) {
		value = `Ходит: ${currentPlayer}`;
	}

	return <InformationLayout>{value}</InformationLayout>;
};

Information.propTypes = {
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	currentPlayer: PropTypes.string,
};
