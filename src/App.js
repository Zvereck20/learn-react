import { Route, Routes, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Task } from './components/task/task';
import { MainPage } from './components/main-page/main-page';
import { NotFound } from './components/not-found/not-found';
import './style.css';

import { useDispatch } from 'react-redux';
import { downloadTodos } from './actions';

export const App = () => {
	const [isLoading, setIsLoading] = useState(true);
	const dispatch = useDispatch();

	useEffect(() => {
		setIsLoading(true);
		dispatch(downloadTodos());
		setIsLoading(false);
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	if (isLoading) {
		return <div className="loader"></div>;
	}

	return (
		<div className="app">
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="task/:id" element={<Task />} />
				<Route path="/404" element={<NotFound />} />
				<Route path="*" element={<Navigate to="/404" />} />
			</Routes>
		</div>
	);
};
