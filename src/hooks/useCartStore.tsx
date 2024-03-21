import { onUpdateProducts } from '../store/cartSlicer';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { Product } from '../types/product';

export const useCartStore = () => {
	const dispatch = useAppDispatch();

	const { products } = useAppSelector(state => state.cart);

	const addProducts = (name: string, items: Product[]) => {
		const newProducts = products.filter(p => p.name !== name);
		dispatch(onUpdateProducts([...newProducts, ...items]));
	};

	return {
		// Properties
		products,
		// Methods
		addProducts
	};
};
