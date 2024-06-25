import { useState } from 'react';
import { debounceEvent } from '../../utils/debounceEvent';
import { SearchDebounceLayout } from './search-debounce-layout';

export const SearchDebounce = ({ products, setSearchItems }) => {
	const [value, setValue] = useState('');

	const foundItems = (value) => {
		let result = [];

		products.forEach((element) => {
			const title = element[1].title;
			if (title.toLowerCase().includes(value.toLowerCase())) {
				result.push(element);
			}
		});

		setSearchItems([...result]);
	};

	const onChange = ({ target }) => {
		setValue(target.value);

		const itemsDebounce = debounceEvent(foundItems, 1000);
		itemsDebounce(target.value);
	};

	return <SearchDebounceLayout value={value} onChange={onChange} />;
};
