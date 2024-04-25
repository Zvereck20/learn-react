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

	const checkWinner = (player) => {
		if (player.length === 3 && !isGameEnded) {
			WIN_PATTERNS.map((element) => {
				if (element.every((el, index) => el === player[index])) {
					setIsGameEnded(true);
					const player = currentPlayer === 'X' ? 'O' : 'X';
					setCurrentPlayer(player);
				}
			});
		}
	};

	let resultX = [];
	let resultO = [];

	for (let i = 0; i < field.length; i++) {
		field[i] === 'X' && resultX.push(i);
		field[i] === 'O' && resultO.push(i);
	}

	checkWinner(resultX);
	checkWinner(resultO);

	if (field.every((el) => el.length > 0) && !isDraw) setIsDraw(true);

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
		/>
	);
};
