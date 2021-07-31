const indexCtrl = {};

const products = [
	{
		id: 10,
		type: 'ropa',
		labels: 'clothing',
		name: 'Camiseta Lost in Paradise',
		price: 10.0,
		description:
			'Camiseta básica, 50% algodón 50% poliéster, bordado reflejante, hecha en USA.',
		img: '/img/product.jpg',
	},
	{
		id: 10,
		type: 'juegos',
		labels: 'clothing',
		price: 50.0,
		name: 'Mario Kart 8 Deluxe',
		description:
			'Camiseta básica, 50% algodón 50% poliéster, bordado reflejante, hecha en USA.',
		img: '/img/MarioKart.png',
	},
	{
		id: 10,
		type: 'ropa',
		labels: 'clothing',
		price: 8.0,
		name: 'Camiseta To The Top',
		description:
			'Camiseta básica, 50% algodón 50% poliéster, bordado reflejante, hecha en USA.',
		img: '/img/product2.jpg',
	},
	{
		id: 10,
		type: 'juegos',
		labels: 'clothing',
		price: 50.0,
		name: 'Super Mario Odyssey',
		description:
			'Camiseta básica, 50% algodón 50% poliéster, bordado reflejante, hecha en USA.',
		img: '/img/MarioOdyssey.png',
	},
	{
		id: 10,
		type: 'juegos',
		labels: 'clothing',
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

indexCtrl.renderSingin = (req, res) => {
	res.render('singin');
};

indexCtrl.renderSingup = (req, res) => {
	res.render('singup');
};

module.exports = indexCtrl;
