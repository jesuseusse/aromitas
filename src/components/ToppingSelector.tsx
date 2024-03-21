import { useState } from 'react';
import { CustomRadioGroup } from '../ui/RadioGroup';
import ingredients from '../data/ingredients.json';

interface Props {
	value: string;
	onChange: (value: string) => void;
}

export const ToppingSelector = ({ value = '', onChange }: Props) => {
	const [topping, setTopping] = useState(value);
	return (
		<CustomRadioGroup
			title='Topping'
			options={ingredients.toppings}
			value={topping}
			onChange={val => {
				onChange(val);
				setTopping(val);
			}}
		/>
	);
};
