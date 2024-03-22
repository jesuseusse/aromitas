import {
	Button,
	Container,
	Divider,
	Grid,
	Paper,
	Typography
} from '@mui/material';
import { OrderItem } from '../components/OrderItem';
import { useCartStore } from '../hooks/useCartStore';
import { Product } from '../types/product';

export const Order = () => {
	const { products } = useCartStore();

	const onSend = () => {
		const text = products
			.map(p => {
				const ing = [];
				if (p.jarabe) ing.push(p.jarabe);
				if (p.fruta) ing.push(p.fruta);
				if (p.topping) ing.push(p.topping);
				if (p.frappe) ing.push(p.frappe);
				return `\`${p.name} (${ing.length === 0 ? 'solos' : ing.join(',')}) $${
					p.price
				}\``;
			})
			.join(', ');
		const total = `- *Total: $${products
			.map(a => a.price)
			.reduce((a, b) => (a || 0) + (b || 0), 0)}*`;

		window.open(
			`https://api.whatsapp.com/send/?phone=525614031066&text=${
				text + ',  ' + total
			}&type=phone_number&app_absent=0)`
		);
	};
	return (
		<Container>
			<Paper
				elevation={1}
				sx={{
					padding: 2,
					marginTop: 1,
					overflow: 'auto',
					borderRadius: '16px'
				}}
			>
				<Typography
					variant='subtitle1'
					sx={{ textAlign: 'center', fontWeight: 'bold' }}
				>
					Su orden
				</Typography>
				<OrderItem name='crepa' />
				<OrderItem name='15 mini hotcakes' />
				<OrderItem name='25 mini hotcakes' />
				<OrderItem name='frappé' />
			</Paper>
			<Paper
				elevation={1}
				sx={{
					padding: 2,
					marginTop: 1,
					overflow: 'auto',
					borderRadius: '16px'
				}}
			>
				<Typography
					variant='subtitle1'
					sx={{ textAlign: 'center', fontWeight: 'bold' }}
				>
					Total productos en carrito{' '}
					{products.map((p: Product, k) => {
						const ing = [];
						if (p.jarabe) ing.push(p.jarabe);
						if (p.fruta) ing.push(p.fruta);
						if (p.topping) ing.push(p.topping);
						if (p.frappe) ing.push(p.frappe);
						const formatedName = `${p.name} (${
							ing.length === 0 ? 'sin ingredientes' : ing.join(',')
						})  `;
						return (
							<Grid container key={k} justifyContent='space-between'>
								<Grid item>
									<Typography>{formatedName}</Typography>
								</Grid>
								<Grid item>
									<Typography>$ {p.price}</Typography>
								</Grid>
							</Grid>
						);
					})}
				</Typography>
				<Divider sx={{ marginY: 2 }} />
				<Grid container justifyContent='space-between'>
					<Grid item>
						<Typography>Total:</Typography>
					</Grid>
					<Grid item>
						<Typography fontWeight={'bold'}>
							${' '}
							{products
								.map(a => a.price)
								.reduce((a, b) => (a || 0) + (b || 0), 0)}
						</Typography>
					</Grid>
				</Grid>
				{products.length > 0 && (
					<Button
						fullWidth
						sx={{ margin: 'auto' }}
						onClick={onSend}
						variant='outlined'
					>
						Enviar orden
					</Button>
				)}
			</Paper>
		</Container>
	);
};
