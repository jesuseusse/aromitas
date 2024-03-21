import { useState } from 'react';
import { CustomRadioGroup } from '../ui/RadioGroup';
import ingredients from '../data/ingredients.json';

interface Props {
	value: string;
	onChange: (value: string) => void;
}

export const FruitSelector = ({ value = '', onChange }: Props) => {
	const [fruit, setFruit] = useState(value);
	return (
		<CustomRadioGroup
			title='Fruta'
			options={ingredients.frutas}
			value={fruit}
			onChange={val => {
				onChange(val);
				setFruit(val);
			}}
		/>
	);
};
