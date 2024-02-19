import { Container, Grid, Paper, Typography } from '@mui/material';

export const Home = () => {
	return (
		<Container>
			<Paper elevation={2}>
				<img
					src='./img/Aromitas.jpeg'
					alt=''
					width='100%'
					height='100%'
					style={{ objectFit: 'fill' }}
				/>
			</Paper>
			<Paper sx={{ padding: 2 }}>
				<Typography
					variant='subtitle1'
					sx={{ textAlign: 'center', fontWeight: 'bold' }}
				>
					Mi menú
				</Typography>
				<Grid container sx={{ justifyContent: 'space-between' }}>
					<Grid item>
						<Typography>Brochetas de mini hotcakes</Typography>
					</Grid>
					<Grid item>
						<Typography>$30</Typography>
					</Grid>
				</Grid>
				<Grid container sx={{ justifyContent: 'space-between' }}>
					<Grid item>
						<Typography>Bandeja de mini hotcakes</Typography>
					</Grid>
					<Grid item>
						<Typography>$30</Typography>
					</Grid>
				</Grid>
				<Grid container sx={{ justifyContent: 'space-between' }}>
					<Grid item>
						<Typography>Mini crepas</Typography>
					</Grid>
					<Grid item>
						<Typography>$30</Typography>
					</Grid>
				</Grid>
				<Grid container sx={{ justifyContent: 'space-between' }}>
					<Grid item>
						<Typography>Vaso de mini Donas</Typography>
					</Grid>
					<Grid item>
						<Typography>$30</Typography>
					</Grid>
				</Grid>
			</Paper>
		</Container>
	);
};
