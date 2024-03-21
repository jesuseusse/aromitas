import { createBrowserRouter, redirect } from 'react-router-dom';
import { Home } from './pages/Home';
import { Order } from './pages/Order';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />
	},
	{
		path: 'order',
		element: <Order />
	},
	{
		path: '*',
		loader: () => redirect('/')
	}
]);
