import { useState } from 'react';
import { SerachLayout } from './search-layout';

export const Search = ({ products, setProducts, refreshProducts }) => {
	const [modal, setModal] = useState(false);
	const [value, setValue] = useState('');
	const [cancel, setCancel] = useState(false);

	let searchItems = [];

	const onSubmit = (e) => {
		e.preventDefault();

		products.forEach((element) => {
			const title = element[1].title;

			if (title.toLowerCase().includes(value.toLowerCase())) {
				searchItems.push(element);
				setProducts(searchItems);
				setValue('');
				setModal('');
				setCancel(true);
			}
		});
	};

	const onCancel = () => {
		refreshProducts();
		setCancel(false);
	};

	return (
		<SerachLayout
			modal={modal}
			setModal={setModal}
			onSubmit={onSubmit}
			value={value}
			setValue={setValue}
			cancel={cancel}
			onCancel={onCancel}
		/>
	);
};
