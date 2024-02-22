import { Container, Grid, Paper, Typography } from '@mui/material';
import { AccordionDetails } from '../components/CustomAccordion';
import {
	CustomAccordion,
	AccordionSummary
} from '../components/CustomAccordion';

interface MenuItemProps {
	title: string;
	price: string;
	description?: string;
	images?: string[];
}

const MenuItem = ({ title, price, description, images }: MenuItemProps) => {
	return (
		<CustomAccordion>
			<AccordionSummary>
				<Grid container sx={{ justifyContent: 'space-between' }}>
					<Grid item>
						<Typography sx={{ fontSize: 18 }}>{title}</Typography>
					</Grid>
					<Grid item>
						<Typography sx={{ fontSize: 18 }}>${price}</Typography>
					</Grid>
				</Grid>
			</AccordionSummary>
			<AccordionDetails>
				<Typography sx={{ marginLeft: 2, fontSize: 16 }}>
					{description}
				</Typography>
				{images?.map((img, k) => {
					return (
						<img
							key={k}
							width='100%'
							height='100%'
							src={img}
							style={{
								objectFit: 'cover',
								aspectRatio: '1/1',
								borderRadius: '8px'
							}}
						/>
					);
				})}
			</AccordionDetails>
		</CustomAccordion>
	);
};

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
				<MenuItem
					title='Mini hotcakes'
					price='30'
					description='15 mini hotcakes con jarabe y fruta de tu preferencia'
					images={['./img/mini-hotcake-1.jpeg']}
				/>
				<MenuItem
					title='Mini crepas'
					price='30'
					description='Una mini crepa con jarabe y fruta de tu preferencia'
					images={['./img/mini-crepa-1.jpeg']}
				/>
				<MenuItem
					title='Mini Donas'
					price='25'
					description='6 mini donas con arabe y fruta de tu preferencia'
					images={['./img/mini-donas-1.jpeg']}
				/>
			</Paper>
		</Container>
	);
};
