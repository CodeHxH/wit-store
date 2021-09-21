const indexCtrl = {};

const uuid = require('uuid');

const products = [
	{
		id: '8b94c317-20e0-45a6-a75c-baf500c53b57',
		type: true,
		label: 'Ropa',
		tags: 'ropa',
		name: 'Camiseta Lost in Paradise',
		price: 10.0,
		description:
			'Camiseta básica, 50% algodón 50% poliéster, bordado reflejante, hecha en USA.',
		img: '/img/product.jpg',
	},
	{
		id: 'a2fed2b9-3b4e-4e47-bebe-063ab267feab',
		label: 'Juegos',
		tags: 'juegos',
		price: 50.0,
		name: 'Mario Kart 8 Deluxe',
		description:
			'Camiseta básica, 50% algodón 50% poliéster, bordado reflejante, hecha en USA.',
		img: '/img/MarioKart.png',
	},
	{
		id: 'eaf123fd-36e5-4e0e-b146-2c280c91aadc',
		type: true,
		label: 'Ropa',
		tags: 'ropa',
		price: 8.0,
		name: 'Camiseta To The Top',
		description:
			'Camiseta básica, 50% algodón 50% poliéster, bordado reflejante, hecha en USA.',
		img: '/img/product2.jpg',
	},
	{
		id: '4eb1361a-684f-45db-bce4-507b5b5ab9e3',
		label: 'Juegos',
		tags: 'juegos',
		price: 50.0,
		name: 'Super Mario Odyssey',
		description:
			'Camiseta básica, 50% algodón 50% poliéster, bordado reflejante, hecha en USA.',
		img: '/img/MarioOdyssey.png',
	},
	{
		id: 'f8b3efb8-4acf-45bd-aca8-ddba96e9d0ed',
		label: 'Juegos',
		tags: 'juegos',
		price: 60.0,
		name: 'Smash Bros Ultimate',
		description:
			'Camiseta básica, 50% algodón 50% poliéster, bordado reflejante, hecha en USA.',
		img: '/img/smash.png',
	},
	{
		id: 'f8b3efb8-4acf-45bd-aca8-ddba96ed0ed',
		label: 'Juegos',
		tags: 'juegos',
		price: 60.0,
		name: 'The Legend of Zelda',
		description:
			'Camiseta básica, 50% algodón 50% poliéster, bordado reflejante, hecha en USA.',
		img: '/img/Zelda.png',
	},
	{
		id: 'f8b3efb8-4acf-45bd-aca8-ddb96e9d0ed',
		label: 'Consolas',
		tags: 'juegos',
		price: 420.0,
		name: 'Xbox series X',
		description:
			'Camiseta básica, 50% algodón 50% poliéster, bordado reflejante, hecha en USA.',
		img: '/img/seriesx.jpg',
	},
	{
		id: 'f8b3efb8-4acf-45d-aca8-ddba96e9d0ed',
		type: true,
		label: 'Ropa',
		tags: 'ropa',
		price: 9.0,
		name: "Because i'm here",
		description:
			'Camiseta básica, 50% algodón 50% poliéster, bordado reflejante, hecha en USA.',
		img: '/img/ropa.png',
	},
	{
		id: 'f8b3fb8-4acf-45bd-aca8-ddba96e9d0ed',
		label: 'Consolas',
		tags: 'juegos',
		price: 450.0,
		name: 'PlayStation 5',
		description:
			'Camiseta básica, 50% algodón 50% poliéster, bordado reflejante, hecha en USA.',
		img: '/img/ps5.jpg',
	},
	{
		id: 'fb3efb8-4acf-45bd-aca8-ddba96e9d0ed',
		label: 'Juegos',
		tags: 'juegos',
		price: 56.0,
		name: 'Mario Party',
		description:
			'Camiseta básica, 50% algodón 50% poliéster, bordado reflejante, hecha en USA.',
		img: '/img/MarioParty.png',
	},
	{
		id: 'f8b3efb8-4acf-45bd-aca8-ddba96e9d0d',
		label: 'Figuras',
		tags: 'figuras',
		price: 32.0,
		name: 'Kamado Nezuko',
		description:
			'Camiseta básica, 50% algodón 50% poliéster, bordado reflejante, hecha en USA.',
		img: '/img/figuras.png',
	},
	{
		id: 'f8b3efb8-4acf-45bd-aca8-ddba96e9d',
		type: true,
		label: 'Ropa',
		tags: 'ropa',
		price: 10.0,
		name: 'Todoroki',
		description:
			'Camiseta básica, 50% algodón 50% poliéster, bordado reflejante, hecha en USA.',
		img: '/img/product3.jpg',
	},
	{
		id: 'f8b3efb8-4acf-45bd-aca8-ddbae9d0d',
		type: true,
		label: 'Ropa',
		tags: 'ropa',
		price: 10.0,
		name: 'Neon Genesis Evangelion',
		description:
			'Camiseta básica, 50% algodón 50% poliéster, bordado reflejante, hecha en USA.',
		img: '/img/product4.jpg',
	},
	{
		id: 'f8b3e8-4acf-45bd-aca8-ddba96e9d0d',
		type: true,
		label: 'Ropa',
		tags: 'ropa',
		price: 10.0,
		name: 'Bakugo',
		description:
			'Camiseta básica, 50% algodón 50% poliéster, bordado reflejante, hecha en USA.',
		img: '/img/product5.jpg',
	},
];

let indexProducts = [];

for (let i = 0; i < 5; i++) {
	indexProducts.push(products[i]);
}

// Index
indexCtrl.renderIndex = (req, res) => {
	res.render('index', { indexProducts });
};

// Productos
indexCtrl.renderProducts = (req, res) => {
	res.render('products', { products });
};

// Producto
indexCtrl.renderProduct = (req, res) => {
	let item;

	products.forEach((product) => {
		if (product.id == req.params.id) {
			item = product;
		}
	});

	res.render('product', { item, indexProducts });
};

// Inicio de sesión
indexCtrl.renderSingin = (req, res) => {
	res.render('singin');
};

// Registro
indexCtrl.renderSingup = (req, res) => {
	res.render('singup');
};

// Carrito
indexCtrl.renderCart = (req, res) => {
	// Obteniendo el carrito
	const cart = req.cookies.cart;

	let price = 0;

	// Calculando el valor del carrito
	cart.forEach((item) => {
		for (let i = 0; i < item.quantity; i++) {
			price += item.product.price;
		}
	});

	res.render('cart', { cart, price });
};

// Añadir productos al carrito
indexCtrl.addProduct = (req, res) => {
	let product;

	// Obteniendo el producto
	products.forEach((item) => {
		if (item.id == req.body.id) {
			product = item;
		}
	});

	// Creando el item para el carrito
	let item;

	if (product.type) {
		item = {
			product: product,
			quantity: req.body.quantity,
			size: req.body.size,
			id: uuid.v4(),
		};
	} else {
		item = {
			product: product,
			quantity: req.body.quantity,
			id: uuid.v4(),
		};
	}

	// Obteniendo el carrito
	let cart = req.cookies.cart;

	// Agregando el producto al carrito
	cart.push(item);

	// Guardando los cambios del carrito
	res.cookie('cart', cart);

	// render cart
	res.redirect('/products');
};

// Eliminar productos del carrito
indexCtrl.deleteProduct = (req, res) => {
	let cart = req.cookies.cart;

	let counter = 0;

	let drop;

	// Obteniendo el índice del producto
	cart.forEach((item) => {
		if (item.id == req.params.id) {
			drop = counter;
		} else {
			counter++;
		}
	});

	// Borrando el producto
	cart.splice(drop, 1);

	// Guardando los cambios del carrito
	res.cookie('cart', cart);

	res.redirect('/cart');
};

module.exports = indexCtrl;
