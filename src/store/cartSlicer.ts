import { createSlice } from '@reduxjs/toolkit';
import { Product } from '../types/product';

interface InitialState {
	products: Product[];
}

const initialState: InitialState = {
	products: []
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState: initialState,
	reducers: {
		onUpdateProducts: (state, action) => {
			state.products = action.payload;
		}
		// removeProduct: (state, action /* action */) => {
		// 	//do something
		// 	// state.user = undefined;
		// }
	}
});

export const { onUpdateProducts } = cartSlice.actions;
