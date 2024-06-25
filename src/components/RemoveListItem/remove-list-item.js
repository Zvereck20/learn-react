import { RemoveListItemLayout } from './remove-list-item-layout';

// Firebase variables
import { ref, remove } from 'firebase/database';
import { db } from '../../firebase';

export const RemoveListItem = ({ id, refreshProducts }) => {
	const onClick = () => {
		const productsDbRef = ref(db, `products/${id}`);

		remove(productsDbRef)
			.then((response) => {
				console.log('Дело выполнено, ответ сервера:', response);
			})
			.catch(() => console.log('some DELETE'))
			.finally(() => refreshProducts());
	};

	return <RemoveListItemLayout onClick={onClick} />;
};
