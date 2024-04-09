import styles from './App.module.css';
import { useState } from 'react';

export const App = () => {
	const [value, setValue] = useState(false);
	const [list, setList] = useState([]);
	const [error, setError] = useState('');
	const [isValueValid, setIsValueValid] = useState(false);

	const onInputButtonClick = () => {
		let promptValue = prompt('Введите значение');

		if (promptValue.length < 3) {
			setError('Введенное значение должно содержать минимум 3 символа');
			setIsValueValid(false);
		} else {
			setValue(promptValue);
			setError('');
			setIsValueValid(true);
		}
	};

	const onAddButtonClick = () => {
		if (value.length > 2) {
			let id = Date.now();
			let updatedList = [...list, { id, value }];
			setList(updatedList);
			setError('');
			setValue('');
			setIsValueValid(false);
		}
	};

	return (
		<div className={styles.app}>
			<h1 className={styles.pageHeading}>Ввод значения</h1>
			<p className={styles.noMarginText}>
				Текущее значение <code>value</code>: "<output className={styles.currentValue}>{value}</output>"
			</p>

			{error !== '' && <div className={styles.error}>{error}</div>}

			<div className={styles.buttonsContainer}>
				<button className={styles.button} onClick={onInputButtonClick}>
					Ввести новое
				</button>

				<button className={styles.button} disabled={!isValueValid} onClick={onAddButtonClick}>
					Добавить в список
				</button>
			</div>
			<div className={styles.listContainer}>
				<h2 className={styles.listHeading}>Список:</h2>

				{list.length === 0 ? (
					<p className={styles.noMarginText}>Нет добавленных элементов</p>
				) : (
					<ul className={styles.list}>
						{list.map(({ id, value }) => {
							return (
								<li className={styles.listItem} key={id}>
									{value}
								</li>
							);
						})}
					</ul>
				)}
			</div>
		</div>
	);
};
