import { useState } from 'react';
import { ChangeItemValueLayout } from './change-item-value-layout';

// Firebase variables
import { ref, set } from 'firebase/database';
import { db } from '../../firebase';

export const ChangeItemValue = ({ id, refreshProducts }) => {
	const [modal, setModal] = useState(false);
	const [value, setValue] = useState('');

	const onSubmit = (event) => {
		event.preventDefault();

		const productsDbRef = ref(db, `products/${id}`);

		set(productsDbRef, {
			title: value,
		})
			.then((response) => {
				console.log('Дело обновлено, ответ сервера:', response);
				refreshProducts();
				setModal(false);
			})
			.catch(() => console.log('some SET'))
			.finally(() => setValue(''));
	};

	return (
		<ChangeItemValueLayout
			modal={modal}
			setModal={setModal}
			onSubmit={onSubmit}
			value={value}
			setValue={setValue}
		/>
	);
};
