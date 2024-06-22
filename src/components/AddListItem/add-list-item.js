import { useState } from 'react';
import { AddListItemLayout } from './add-list-item-layout';

export const AddListItem = ({ refreshProducts }) => {
	const [modal, setModal] = useState(false);
	const [value, setValue] = useState('');

	const onSubmit = (event) => {
		event.preventDefault();

		fetch('http://localhost:3003/products', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				title: value,
			}),
		})
			.then((rawResponse) => rawResponse.json())
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
