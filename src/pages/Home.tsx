import { Button, Container, Grid, Paper, Typography } from '@mui/material';
import menu from '../data/menu.json';
import ingredients from '../data/ingredients.json';
import { Link, redirect } from 'react-router-dom';
import { MenuItem } from '../components/MenuItem';

export const Home = () => {
	return (
		<Container>
			<Paper
				elevation={0}
				sx={{
					border: 'none',
					overflow: 'hidden',
					borderRadius: '16px',
					display: 'flex',
					justifyContent: 'center',
					width: { xs: 'auto', sm: '500px' },
					height: { xs: 'auto', sm: '500px' },
					margin: 'auto'
				}}
			>
				<img
					src='./img/Aromitas.jpeg'
					alt='AROMITAS'
					width='100%'
					height='100%'
					style={{
						objectFit: 'fill',
						filter: 'brightness(1.09)',
						margin: 'auto'
					}}
				/>
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
					Menú
				</Typography>
				{menu.map(({ name, description, images, price }, k) => {
					return (
						<MenuItem
							key={k}
							title={name}
							price={price}
							description={description}
							images={images}
						/>
					);
				})}
			</Paper>
			<Ingredientes />

			<Link to={'order'}>
				<Button fullWidth variant='outlined'>
					Ordene aquí
				</Button>
			</Link>
		</Container>
	);
};

export function Ingredientes() {
	return (
		<Grid container>
			<Grid item xs={4}>
				<Paper
					elevation={1}
					sx={{
						padding: 2,
						margin: 1,
						overflow: 'auto',
						borderRadius: '16px'
					}}
				>
					<Typography
						variant='subtitle1'
						sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: 24 }}
					>
						Jarabes
					</Typography>
					{ingredients.jarabes.map((ing, k) => (
						<Typography
							key={k}
							sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: 18 }}
						>
							{ing}
						</Typography>
					))}
				</Paper>
			</Grid>
			<Grid item xs={4}>
				<Paper
					elevation={1}
					sx={{
						padding: 2,
						margin: 1,
						overflow: 'auto',
						borderRadius: '16px'
					}}
				>
					<Typography
						variant='subtitle1'
						sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: 24 }}
					>
						Frutas
					</Typography>
					{ingredients.frutas.map((ing, k) => (
						<Typography
							key={k}
							sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: 18 }}
						>
							{ing}
						</Typography>
					))}
				</Paper>
			</Grid>
			<Grid item xs={4}>
				<Paper
					elevation={1}
					sx={{
						padding: 2,
						margin: 1,
						overflow: 'auto',
						borderRadius: '16px'
					}}
				>
					<Typography
						variant='subtitle1'
						sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: 24 }}
					>
						Toppings
					</Typography>
					{ingredients.toppings.map((ing, k) => (
						<Typography
							key={k}
							sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: 18 }}
						>
							{ing}
						</Typography>
					))}
				</Paper>
			</Grid>
		</Grid>
	);
}
