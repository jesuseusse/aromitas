import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

interface Props {
	title: string;
	options: Array<string>;
	value?: string;
	onChange: (val: string) => void;
}

export const CustomRadioGroup = ({
	title,
	options,
	value,
	onChange
}: Props) => {
	return (
		<FormControl>
			<FormLabel>{title}</FormLabel>
			<RadioGroup
				row
				aria-labelledby={`${title}-radio-buttons-group-label`}
				name='title'
				value={value}
				onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
					onChange((event.target as HTMLInputElement).value)
				}
			>
				{options.map((opt, k) => (
					<FormControlLabel
						key={k}
						value={opt}
						control={<Radio />}
						label={opt}
					/>
				))}
			</RadioGroup>
		</FormControl>
	);
};
