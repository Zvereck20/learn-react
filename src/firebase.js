import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
	apiKey: 'AIzaSyC9tSo6whbCelTX0WP1dEbkx_sW2D6Iu7s',
	authDomain: 'productsproject-6eb45.firebaseapp.com',
	projectId: 'productsproject-6eb45',
	storageBucket: 'productsproject-6eb45.appspot.com',
	messagingSenderId: '129706009724',
	appId: '1:129706009724:web:cfc522cee0417124ad95f9',
	databaseURL:
		'https://productsproject-6eb45-default-rtdb.asia-southeast1.firebasedatabase.app/',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
