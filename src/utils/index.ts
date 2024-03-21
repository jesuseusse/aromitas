import menu from '../data/menu.json';

export const findPrice = (name: string) => {
	const item = menu.filter(
		item => item.name.toLowerCase() === name.toLowerCase()
	);
	return Number(item[0].price || 0);
};
