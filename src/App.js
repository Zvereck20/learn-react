import logo from './logo.svg';
import './App.css';
import { createElement } from 'react';

const date = new Date();

export const App = () => {
	return createElement(
		'div',
		{ className: 'App' },
		createElement('header', { className: 'App-header' }, [
			createElement('img', { src: logo, className: 'App-logo', alt: 'logo' }),
			createElement('p', null, 'Edit <code>src/App.js</code> and save to reload.'),
			createElement('a', { className: 'App-link', href: 'https://reactjs.org', target: '_blank', rel: 'noopener noreferrer' }, 'Learn React'),
			createElement('div', { style: { marginTop: '20px' } }, String(date.getFullYear())),
		]),
	);
};
