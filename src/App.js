import { useState, useEffect } from 'react';
import { AddListItem } from './components/AddListItem/add-list-item';
import { ChangeItemValue } from './components/ChangeItemValue/change-item-value';
import { RemoveListItem } from './components/RemoveListItem/remove-list-item';
import { Search } from './components/Search/search';
import { SearchDebounce } from './components/SearchDebounce/search-debounce';
import { Sorting } from './components/Sorting/sorting';
import './index.css';

// Firebase variables
import { ref, onValue } from 'firebase/database';
import { db } from './firebase';

export const App = () => {
	const [refreshProductsFlag, setRefreshProductsFlag] = useState(false);
	const [products, setProducts] = useState([]);
	const [searchItems, setSearchItems] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const refreshProducts = () => setRefreshProductsFlag(!refreshProductsFlag);

	useEffect(() => {
		setIsLoading(true);

		const productsDbRef = ref(db, 'products');

		return onValue(productsDbRef, (snapshot) => {
			const loadedProducts = snapshot.val() || [];

			setProducts(Object.entries(loadedProducts));
			setIsLoading(false);
		});
	}, [refreshProductsFlag]);

	return (
		<div className="app">
			<h1>Список дел</h1>
			<AddListItem refreshProducts={refreshProducts} />
			{isLoading ? (
				<div className="loader"></div>
			) : products.length ? (
				<>
					<div className="container">
						{/* Обычный поиск */}

						{/* <Search
							products={products}
							setProducts={setProducts}
							refreshProducts={refreshProducts}
						/> */}

						{/* продвинутый поиск с помощью debounce() */}

						<SearchDebounce
							products={products}
							setSearchItems={setSearchItems}
						/>

						<Sorting
							products={products}
							setProducts={setProducts}
							refreshProducts={refreshProducts}
						/>
					</div>
					{searchItems.length ? (
						<ul className="list">
							{searchItems.map(([id, { title }]) => (
								<li key={id} className="item">
									<span>{title}</span>
									<div className="wrap">
										<RemoveListItem
											id={id}
											refreshProducts={refreshProducts}
										/>
										<ChangeItemValue
											id={id}
											refreshProducts={refreshProducts}
										/>
									</div>
								</li>
							))}
						</ul>
					) : (
						<ul className="list">
							{products.map(([id, { title }]) => (
								<li key={id} className="item">
									<span>{title}</span>
									<div className="wrap">
										<RemoveListItem
											id={id}
											refreshProducts={refreshProducts}
										/>
										<ChangeItemValue
											id={id}
											refreshProducts={refreshProducts}
										/>
									</div>
								</li>
							))}
						</ul>
					)}
				</>
			) : (
				<p>Добавьте новое дело</p>
			)}
		</div>
	);
};
