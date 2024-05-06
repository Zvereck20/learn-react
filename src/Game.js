import { useState } from 'react';
import { GameLayout } from './GameLayout';

const WIN_PATTERNS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8], // Варианты побед по горизонтали
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8], // Варианты побед по вертикали
	[0, 4, 8],
	[2, 4, 6], // Варианты побед по диагонали
];

export const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(['', '', '', '', '', '', '', '', '']);

	WIN_PATTERNS.forEach((element) => {
		const player = currentPlayer === 'X' ? 'O' : 'X';

		if (element.every((el) => field[el] === player)) {
			setIsGameEnded(true);
			setCurrentPlayer(player);
		}
	});

	if (field.every((el) => el.length > 0) && !isDraw) setIsDraw(true);

	let result = [...field];

	const cellClick = (index) => {
		if (!result[index].length && !isGameEnded) {
			result[index] = currentPlayer;
			setField(result);
			const player = currentPlayer === 'X' ? 'O' : 'X';
			setCurrentPlayer(player);
		}
	};

	const clearClick = () => {
		setCurrentPlayer('X');
		setIsGameEnded(false);
		setIsDraw(false);
		setField(['', '', '', '', '', '', '', '', '']);
	};

	return (
		<GameLayout
			field={field}
			setField={setField}
			isDraw={isDraw}
			isGameEnded={isGameEnded}
			currentPlayer={currentPlayer}
			setCurrentPlayer={setCurrentPlayer}
			clearClick={clearClick}
			cellClick={cellClick}
		/>
	);
};
