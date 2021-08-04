const indexCtrl = {};

const products = [
	{
		id: '8b94c317-20e0-45a6-a75c-baf500c53b57',
		type: 'ropa',
		labels: 'clothing',
		name: 'Camiseta Lost in Paradise',
		price: 10.0,
		description:
			'Camiseta básica, 50% algodón 50% poliéster, bordado reflejante, hecha en USA.',
		img: '/img/product.jpg',
	},
	{
		id: 'a2fed2b9-3b4e-4e47-bebe-063ab267feab',
		type: 'juegos',
		labels: 'clothing',
		price: 50.0,
		name: 'Mario Kart 8 Deluxe',
		description:
			'Camiseta básica, 50% algodón 50% poliéster, bordado reflejante, hecha en USA.',
		img: '/img/MarioKart.png',
	},
	{
		id: 'eaf123fd-36e5-4e0e-b146-2c280c91aadc',
		type: 'ropa',
		labels: 'clothing',
		price: 8.0,
		name: 'Camiseta To The Top',
		description:
			'Camiseta básica, 50% algodón 50% poliéster, bordado reflejante, hecha en USA.',
		img: '/img/product2.jpg',
	},
	{
		id: '4eb1361a-684f-45db-bce4-507b5b5ab9e3',
		type: 'juegos',
		labels: 'clothing',
		price: 50.0,
		name: 'Super Mario Odyssey',
		description:
			'Camiseta básica, 50% algodón 50% poliéster, bordado reflejante, hecha en USA.',
		img: '/img/MarioOdyssey.png',
	},
	{
		id: 'f8b3efb8-4acf-45bd-aca8-ddba96e9d0ed',
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

indexCtrl.renderProduct = (req, res) => {
	let item;
	products.forEach((product) => {
		if (product.id == req.params.id) {
			item = product;
		}
	});
	res.render('product', { item, products });
};

indexCtrl.renderSingin = (req, res) => {
	res.render('singin');
};

indexCtrl.renderSingup = (req, res) => {
	res.render('singup');
};

module.exports = indexCtrl;
