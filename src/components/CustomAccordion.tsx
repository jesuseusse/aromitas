import * as React from 'react';
import { styled } from '@mui/material/styles';
// import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
	AccordionSummaryProps
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

const Accordion = styled((props: AccordionProps) => (
	<MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
	border: 'none',
	backgroundColor: 'transparent',
	'&::before': {
		display: 'none'
	}
}));

export const AccordionSummary = styled((props: AccordionSummaryProps) => (
	<MuiAccordionSummary
		expandIcon={
			<div
				style={{
					fontSize: '1em',
					width: '0.4em',
					height: '0.4em',
					backgroundColor: 'black',
					borderRadius: '50%',
					marginRight: '4px'
				}}
			/>
		}
		{...props}
	/>
))(({ theme }) => ({
	border: 'none',
	padding: theme.spacing(0),
	backgroundColor: 'transparent',
	flexDirection: 'row-reverse',
	'& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
		transform: 'rotate(90deg)'
	},
	'& .MuiAccordionSummary-content': {
		marginLeft: theme.spacing(0)
	},
	'& ::before': {
		border: '2px solid red'
	}
}));

export const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
	padding: theme.spacing(0),
	border: 'none'
}));

interface CustomAccordionProps {
	children: JSX.Element | JSX.Element[];
}

export const CustomAccordion = ({ children }: CustomAccordionProps) => {
	const [expanded, setExpanded] = React.useState<boolean>(false);

	return (
		<Accordion expanded={expanded} onChange={() => setExpanded(!expanded)}>
			{children}
		</Accordion>
	);
};
