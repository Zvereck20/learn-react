import { useState } from 'react';
import { ChangeItemValueLayout } from './change-item-value-layout';

export const ChangeItemValue = ({ id, refreshProducts }) => {
	const [modal, setModal] = useState(false);
	const [value, setValue] = useState('');

	const onSubmit = (event) => {
		event.preventDefault();

		console.log(refreshProducts);

		fetch(`http://localhost:3003/products/${id}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				title: value,
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('Дело обновлено, ответ сервера:', response);
				refreshProducts();
				setModal(false);
			})
			.catch(() => console.log())
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
