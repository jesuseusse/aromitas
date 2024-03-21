import { useState } from 'react';
import {
	AccordionDetails,
	AccordionSummary,
	CustomAccordion
} from './CustomAccordion';
import { Grid, Link, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';

interface MenuItemProps {
	title: string;
	price: string;
	description?: string;
	images?: string[];
}

export const MenuItem = ({
	title,
	price,
	description,
	images
}: MenuItemProps) => {
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
