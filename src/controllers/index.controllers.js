const indexCtrl = {};

const products = [
	{
		price: 10.0,
		name: 'Camiseta Lost in Paradise',
		description:
			'Camiseta básica, 50% algodón 50% poliéster, bordado reflejante, hecha en USA.',
		img: '/img/product.jpg',
	},
	{
		price: 50.0,
		name: 'Mario Kart 8 Deluxe',
		description:
			'Camiseta básica, 50% algodón 50% poliéster, bordado reflejante, hecha en USA.',
		img: '/img/MarioKart.png',
	},
	{
		price: 8.0,
		name: 'Camiseta To The Top',
		description:
			'Camiseta básica, 50% algodón 50% poliéster, bordado reflejante, hecha en USA.',
		img: '/img/product2.jpg',
	},
	{
		price: 50.0,
		name: 'Super Mario Odyssey',
		description:
			'Camiseta básica, 50% algodón 50% poliéster, bordado reflejante, hecha en USA.',
		img: '/img/MarioOdyssey.png',
	},
	{
		price: 60.0,
		name: 'Smash Bros Ultimate',
		description:
			'Camiseta básica, 50% algodón 50% poliéster, bordado reflejante, hecha en USA.',
		img: '/img/smash.png',
	},
];

indexCtrl.renderIndex = (req, res) => {
	res.render('index', { products });
};

indexCtrl.renderProducts = (req, res) => {
	res.render('products', { products });
};

module.exports = indexCtrl;
