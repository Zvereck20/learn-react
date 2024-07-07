import { Route, Routes, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Task } from './components/task/task';
import { MainPage } from './components/main-page/main-page';
import { NotFound } from './components/not-found/not-found';
import './style.css';
import { TodosContext } from './context';

export const App = () => {
	const [todos, setTodos] = useState([]);
	const [reoladTodos, setReoladTodos] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);

		fetch('http://localhost:3004/todos')
			.then((loadedData) => loadedData.json())
			.then((loadedProducts) => {
				setTodos(loadedProducts);
			})
			.catch(() => console.log('some error'))
			.finally(() => {
				setIsLoading(false);
			});
	}, [reoladTodos]);

	if (isLoading) {
		return <div className="loader"></div>;
	}

	return (
		<div className="app">
			<TodosContext.Provider
				value={{ todos, setTodos, reoladTodos, setReoladTodos }}
			>
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="task/:id" element={<Task />} />
					<Route path="/404" element={<NotFound />} />
					<Route path="*" element={<Navigate to="/404" />} />
				</Routes>
			</TodosContext.Provider>
		</div>
	);
};
