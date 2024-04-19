import styles from './App.module.css';
import { useState } from 'react';

const NUMS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let result = '';

export const App = () => {
	const [value, setValue] = useState('...');
	const [operand1, setOperand1] = useState('');
	const [operand2, setOperand2] = useState('');
	const [operator, setOperator] = useState('');

	const numClick = (el) => {
		operator.length
			? operand2.length
				? (setValue(operand1 + operator + operand2 + el.target.value),
					setOperand2((op) => op + el.target.value))
				: (setValue(operand1 + operator + el.target.value),
					setOperand2(el.target.value))
			: operand1.length
				? (setValue(operand1 + el.target.value),
					setOperand1((op) => op + el.target.value))
				: (setOperand1(el.target.value), setValue(el.target.value));

		result.length ? (result = '') : null;
	};

	const operatorClick = (el) => {
		operand1.length &&
			(setValue(operand1 + el.target.value), setOperator(el.target.value));

		result.length ? (result = '') : null;
	};

	const clearClick = () => {
		setValue('...');
		setOperand1('');
		setOperand2('');
		setOperator('');

		result.length ? (result = '') : null;
	};

	const getResult = () => {
		result = String(eval(value));
		setValue(result);
		setOperand1(result);
		setOperand2('');
		setOperator('');
	};

	return (
		<div className={styles.container}>
			<h2>Введите число</h2>
			<div
				className={
					styles.valueContainer +
					' ' +
					(result.length ? `${styles.valueResult}` : '')
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
							onClick={numClick}
							value={num}
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
