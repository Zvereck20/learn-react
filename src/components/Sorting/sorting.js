import { useState } from 'react';
import { SortingLayout } from './sotring-layout';

export const Sorting = ({ products, setProducts, refreshProducts }) => {
	const [sorted, setSorted] = useState(false);

	const onSorting = () => {
		products.sort(function (a, b) {
			if (a.title < b.title) {
				return -1;
			}
			if (a.title > b.title) {
				return 1;
			}
			return 0;
		});

		const sorted = [...products];

		setProducts(sorted);
		setSorted(true);
	};

	const onDeregister = () => {
		refreshProducts();
		setSorted(false);
	};

	return (
		<SortingLayout
			onSorting={onSorting}
			sorted={sorted}
			setSorted={setSorted}
			onDeregister={onDeregister}
		/>
	);
};
