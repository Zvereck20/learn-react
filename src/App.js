import styles from './styles.module.css';
import { useEffect, useState } from 'react';

export const App = () => {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);

		fetch('https://jsonplaceholder.typicode.com/todos')
			.then((loadedData) => loadedData.json())
			.then((loadedProducts) => {
				setProducts(loadedProducts);
			})
			.catch(() => console.log('some error'))
			.finally(() => setIsLoading(false));
	}, []);

	return (
		<div className={styles.wrapper}>
			{isLoading ? (
				<div className="loader"></div>
			) : (
				<ul className={styles.list}>
					{products.map(({ id, title, completed }) => (
						<li
							key={id}
							className={
								`${styles.item} ` +
								(completed ? `${styles.completed}` : '')
							}
						>
							<div className={styles.count}>{id}</div>
							{title}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};
