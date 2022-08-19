import { Home, ShoppingCart } from 'react-feather';

const pagesSection = [
	{
		href: '/v1/home',
		icon: Home,
		title: 'Inicio',
	},
	{
		href: '/v1/cart',
		icon: ShoppingCart,
		title: 'Carrito',
	},
];

const navItems = [
	{
		title: '',
		pages: pagesSection,
	},
];

export default navItems;
