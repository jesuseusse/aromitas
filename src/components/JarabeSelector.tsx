import { useState } from 'react';
import { CustomRadioGroup } from '../ui/RadioGroup';
import ingredients from '../data/ingredients.json';

interface Props {
	value: string;
	onChange: (value: string) => void;
}

export const JarabeSelector = ({ value = '', onChange }: Props) => {
	const [jarabe, setJarabe] = useState(value);
	return (
		<CustomRadioGroup
			title='Jarabe'
			options={ingredients.jarabes}
			value={jarabe}
			onChange={val => {
				onChange(val);
				setJarabe(val);
			}}
		/>
	);
};
