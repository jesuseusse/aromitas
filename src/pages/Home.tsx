import { Container, Grid, Link, Paper, Typography } from '@mui/material';
import { AccordionDetails } from '../components/CustomAccordion';
import {
	CustomAccordion,
	AccordionSummary
} from '../components/CustomAccordion';
import Carousel from 'react-material-ui-carousel';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import { useState } from 'react';

interface MenuItemProps {
	title: string;
	price: string;
	description?: string;
	images?: string[];
}

const MenuItem = ({ title, price, description, images }: MenuItemProps) => {
	const [show, setShow] = useState(false);
	return (
		<CustomAccordion>
			<AccordionSummary>
				<Grid container sx={{ justifyContent: 'space-between' }}>
					<Grid item>
						<Typography sx={{ fontSize: { xs: 18, md: 24 } }}>
							{title}
						</Typography>
					</Grid>
					<Grid item>
						<Typography sx={{ fontSize: { xs: 18, md: 24 } }}>
							${price}
						</Typography>
					</Grid>
				</Grid>
			</AccordionSummary>
			<AccordionDetails>
				<Typography sx={{ marginLeft: 2, fontSize: { xs: 16, md: 20 } }}>
					{description}{' '}
					{images && (
						<Link onClick={() => setShow(!show)}>
							{!show ? 'Ver fotos' : 'Ocultar'}
						</Link>
					)}
				</Typography>
				{show && images && (
					<Carousel
						autoPlay={false}
						indicators={images.length > 1}
						NextIcon={<ArrowForwardIos />}
						PrevIcon={<ArrowBackIosNew />}
						indicatorContainerProps={{
							style: {
								position: 'absolute', // 1
								zIndex: '1000', // 3
								bottom: '16px'
							}
						}}
					>
						{images.map((img, i) => (
							<img
								width='100%'
								src={img}
								loading='lazy'
								style={{
									objectFit: 'cover',
									aspectRatio: '1/1',
									borderRadius: '8px'
								}}
								key={i}
							/>
						))}
					</Carousel>
				)}
			</AccordionDetails>
		</CustomAccordion>
	);
};

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
				<MenuItem
					title='Mini hotcakes'
					price='35'
					description='15 mini hotcakes con 1 jarabe y 1 fruta de tu preferencia'
					images={['./img/mini-hotcake-1.jpeg', './img/mini-hotcake-2.jpeg']}
				/>
				<MenuItem
					title='Mini crepas'
					price='30'
					description='Una mini crepa con 1 jarabe y 1 fruta de tu preferencia'
					images={['./img/mini-crepa-1.jpeg', './img/mini-crepa-2.jpeg']}
				/>
				<MenuItem
					title='Mini Donas'
					price='25'
					description='6 mini donas con 1 jarabe y 1 fruta de tu preferencia'
					images={['./img/mini-donas-1.jpeg']}
				/>

				<MenuItem
					title='Ingrediente extra'
					price='5'
					description='jarabe y/o fruta'
				/>
			</Paper>
		</Container>
	);
};
