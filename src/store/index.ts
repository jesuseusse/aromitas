import { configureStore } from '@reduxjs/toolkit';
import { cartSlice } from './cartSlicer';

export const store = configureStore({
	reducer: {
		cart: cartSlice.reducer
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: false
		})
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
