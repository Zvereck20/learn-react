import styles from './App.module.css';
import { useState } from 'react';

const NUMS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const getTotal = (num1, num2, operator) => {
	switch (operator) {
		case '+':
			return +num1 + +num2;
			break;
		case '-':
			return +num1 - +num2;
			break;
	}
};

export const App = () => {
	const [value, setValue] = useState('...');
	const [operand1, setOperand1] = useState('');
	const [operand2, setOperand2] = useState('');
	const [operator, setOperator] = useState('');
	const [isSolution, setIsSolution] = useState(false);

	const numClick = (num) => {
		operator.length
			? operand2.length
				? (setValue(operand1 + operator + operand2 + num),
					setOperand2((op) => op + num))
				: (setValue(operand1 + operator + num), setOperand2(num))
			: operand1.length
				? (setValue(operand1 + num), setOperand1((op) => op + num))
				: (setOperand1(num), setValue(num));

		setIsSolution(false);
	};

	const operatorClick = (el) => {
		operand1.length &&
			(setValue(operand1 + el.target.value), setOperator(el.target.value));

		setIsSolution(false);
	};

	const clearClick = () => {
		setValue('...');
		setOperand1('');
		setOperand2('');
		setOperator('');
		setIsSolution(false);
	};

	const getResult = () => {
		const result = String(getTotal(operand1, operand2, operator));
		setValue(result);
		setOperand1(result);
		setOperand2('');
		setOperator('');
		setIsSolution(true);
	};

	return (
		<div className={styles.container}>
			<h2>Введите число</h2>
			<div
				className={
					styles.valueContainer +
					' ' +
					(isSolution ? `${styles.valueResult}` : '')
				}
			>
				{value}
			</div>
			<div className={styles.buttonContainer}>
				{NUMS.map((num) => {
					return (
						<button
							key={num}
							className={styles.numButton + ' ' + styles.button}
							onClick={() => numClick(num)}
							type="button"
						>
							{num}
						</button>
					);
				})}
			</div>

			<div className={styles.operationsContainer}>
				<button
					className={styles.operationButton + ' ' + styles.button}
					disabled={operator.length && true}
					onClick={operatorClick}
					value="+"
				>
					+
				</button>
				<button
					className={styles.operationButton + ' ' + styles.button}
					disabled={operator.length && true}
					onClick={operatorClick}
					value="-"
				>
					-
				</button>
				<button
					className={styles.operationButton + ' ' + styles.button}
					onClick={clearClick}
				>
					C
				</button>
			</div>

			<button
				className={styles.evenlyButton + ' ' + styles.button}
				disabled={!operand2.length && true}
				onClick={getResult}
			>
				=
			</button>
		</div>
	);
};
