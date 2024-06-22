import { RemoveListItemLayout } from './remove-list-item-layout';

export const RemoveListItem = ({ id, refreshProducts }) => {
	const onClick = () => {
		fetch(`http://localhost:3003/products/${id}`, {
			method: 'DELETE',
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('Дело выполнено, ответ сервера:', response);
			})
			.catch(() => console.log('some DELETE'))
			.finally(() => refreshProducts());
	};

	return <RemoveListItemLayout onClick={onClick} />;
};
