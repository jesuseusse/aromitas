import { useEffect, useState } from 'react';
import { Box, Divider, Grid, Typography } from '@mui/material';
import { Counter } from '../ui/Counter';
import { JarabeSelector } from './JarabeSelector';
import { FruitSelector } from './FruitSelector';
import { ToppingSelector } from './ToppingSelector';
import { useCartStore } from '../hooks/useCartStore';
import { findPrice } from '../utils';
import { Product } from '../types/product';
import { FrappeSelector } from './FrappeSelector';

interface Props {
	name: string;
	initialValue?: number;
}

export const OrderItem = ({ name }: Props) => {
	const [items, setItems] = useState<Product[]>([]);
	const { addProducts } = useCartStore();

	useEffect(() => {
		addProducts(name.toLocaleLowerCase(), items);
	}, [items]);

	const onChangeItem = (k: number, val: Product) => {
		const newItems: Product[] = items.map((item, i) => {
			if (k === i) {
				return {
					...item,
					...val
				};
			}
			return item;
		});
		setItems(newItems);
	};

	return (
		<Grid container sx={{ justifyContent: 'space-between' }}>
			<Grid item>
				<Typography sx={{ fontSize: { xs: 18, md: 24 } }}>{name}</Typography>
			</Grid>
			<Grid item>
				<Counter
					value={items.length}
					add={() => setItems([...items, { name, price: findPrice(name) }])}
					subtract={() => {
						const newItems = [...items];
						newItems.pop();
						setItems([...newItems]);
					}}
				/>
			</Grid>
			{items.length > 0 &&
				items.map((item, k) => {
					return (
						<Grid item xs={12} key={k}>
							<Typography>
								{k + 1} - {item.name}
							</Typography>
							{name === 'frappé' ? (
								<Box>
									<Typography marginLeft={1}>Sabor</Typography>
									<Box marginLeft={1}>
										<FrappeSelector
											value={item.frappe || ''}
											onChange={val => {
												onChangeItem(k, {
													...item,
													frappe: val
												});
											}}
										/>
									</Box>
								</Box>
							) : (
								<Box>
									<Typography marginLeft={1}>Ingredientes</Typography>
									<Box marginLeft={1}>
										<JarabeSelector
											value={item.jarabe || ''}
											onChange={val => {
												onChangeItem(k, {
													...item,
													jarabe: val
												});
											}}
										/>
									</Box>
									<Box marginLeft={1}>
										<FruitSelector
											value={item.fruta || ''}
											onChange={val => {
												onChangeItem(k, {
													...item,
													fruta: val
												});
											}}
										/>
									</Box>
									<Box marginLeft={1}>
										<ToppingSelector
											value={item.topping || ''}
											onChange={val => {
												onChangeItem(k, {
													...item,
													topping: val
												});
											}}
										/>
									</Box>
								</Box>
							)}
							<Divider sx={{ marginY: 2 }} />
						</Grid>
					);
				})}
		</Grid>
	);
};
