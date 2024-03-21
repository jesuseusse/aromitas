import { useState } from 'react';
import { CustomRadioGroup } from '../ui/RadioGroup';
import ingredients from '../data/ingredients.json';

interface Props {
	value: string;
	onChange: (value: string) => void;
}

export const FrappeSelector = ({ value = '', onChange }: Props) => {
	const [frappe, setFrappe] = useState(value);
	return (
		<CustomRadioGroup
			title='Sabor'
			options={ingredients.frappe}
			value={frappe}
			onChange={val => {
				onChange(val);
				setFrappe(val);
			}}
		/>
	);
};
