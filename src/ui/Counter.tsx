import { Box, Button, Paper, Typography } from '@mui/material';

interface Props {
	value: number;
	add: () => void;
	subtract: () => void;
}

export const Counter = ({ value, add, subtract }: Props) => {
	return (
		<Box
			sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
		>
			<Button
				variant='outlined'
				sx={{
					padding: 0,
					boxSizing: 'content-box',
					minWidth: '32px',
					height: '32px',
					borderColor: 'black'
				}}
				onClick={subtract}
				disabled={value < 1}
			>
				-
			</Button>
			<Paper
				variant='outlined'
				sx={{
					padding: 0,
					marginX: 1,
					minWidth: '32px',
					height: '32px',
					textAlign: 'center',
					borderColor: 'black'
					// boxSizing: 'content'
				}}
			>
				<Typography variant='subtitle2'>{value}</Typography>
			</Paper>
			<Button
				variant='outlined'
				sx={{
					padding: 0,
					boxSizing: 'content-box',
					minWidth: '32px',
					height: '32px',
					borderColor: 'black'
				}}
				onClick={add}
			>
				+
			</Button>
		</Box>
	);
};
