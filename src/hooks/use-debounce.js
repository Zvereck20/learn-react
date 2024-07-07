import { useEffect, useState } from 'react';

export const useDebounce = (value, delay) => {
	const [debounceValue, setDebounceValue] = useState(value);

	useEffect(() => {
		const timeoutID = setTimeout(() => {
			setDebounceValue(value);
		}, delay);

		return () => {
			clearTimeout(timeoutID);
		};
	}, [value, delay]);

	return debounceValue;
};
