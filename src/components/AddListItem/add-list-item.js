import { useState } from 'react';
import { AddListItemLayout } from './add-list-item-layout';

// Firebase variables
import { ref, push } from 'firebase/database';
import { db } from '../../firebase';

export const AddListItem = ({ refreshProducts }) => {
	const [modal, setModal] = useState(false);
	const [value, setValue] = useState('');

	const onSubmit = (event) => {
		event.preventDefault();

		const productsDbRef = ref(db, 'products');

		push(productsDbRef, {
			title: value,
		})
			.then((response) => {
				console.log(`${value} добавлен, ответ сервера:`, response);
				setModal(false);
				refreshProducts();
			})
			.catch(() => console.log('some POST'))
			.finally(() => setValue(''));
	};

	return (
		<AddListItemLayout
			onSubmit={onSubmit}
			value={value}
			setValue={setValue}
			modal={modal}
			setModal={setModal}
		/>
	);
};
