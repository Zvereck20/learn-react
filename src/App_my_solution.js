// import logo from './logo.svg';
import './App.css';
import styles from './App.module.css';
import { useState } from 'react';
// import { createElement } from 'react';

let listValue = [];

export const App = () => {
	const [valueError, setValueError] = useState(false);
	const [currentValue, setCurrentValue] = useState(null);
	const [buttonIsActive, setButtonIsActive] = useState(false);

	let value = '';

	const newRequest = () => {
		value = prompt('Введите значение');

		if (value.length < 3) {
			setValueError(true);
			setButtonIsActive(false);
		} else {
			setValueError(false);
			setCurrentValue(value);
			setButtonIsActive(true);
		}
	};

	const addValue = () => {
		listValue.push(currentValue);
		setCurrentValue(null);
	};

	return (
		<div className={styles.app}>
			<h1 className={styles.pageHeading}>Ввод значения</h1>
			<p className={styles.noMarginText}>
				Текущее значение <code>value</code>: "<output className={styles.currentValue}>{currentValue}</output>"
			</p>

			{valueError && <div className={styles.error}>Введенное значение должно содержать минимум 3 символа</div>}

			<div className={styles.buttonsContainer}>
				<button className={styles.button} onClick={newRequest}>
					Ввести новое
				</button>
				{buttonIsActive && (
					<button className={styles.button} active="true" onClick={addValue}>
						Добавить в список
					</button>
				)}
				{!buttonIsActive && (
					<button className={styles.button} disabled onClick={addValue}>
						Добавить в список
					</button>
				)}
			</div>
			<div className={styles.listContainer}>
				<h2 className={styles.listHeading}>Список:</h2>

				{listValue.length === 0 && <p className={styles.noMarginText}>Нет добавленных элементов</p>}

				{listValue.length > 0 && (
					<ul className={styles.list}>
						{listValue.map((val) => {
							return (
								<li className={styles.listItem} key={val}>
									{val}
								</li>
							);
						})}
					</ul>
				)}
			</div>
		</div>
	);
};
