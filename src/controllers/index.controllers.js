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
		labels: 'clothing',
		price: 50.0,
		name: 'Super Mario Odyssey',
		description:
			'Camiseta básica, 50% algodón 50% poliéster, bordado reflejante, hecha en USA.',
		img: '/img/MarioOdyssey.png',
	},
	{
		id: 'f8b3efb8-4acf-45bd-aca8-ddba96e9d0ed',
		labels: 'clothing',
		price: 60.0,
		name: 'Smash Bros Ultimate',
		description:
			'Camiseta básica, 50% algodón 50% poliéster, bordado reflejante, hecha en USA.',
		img: '/img/smash.png',
	},
];

// Index
indexCtrl.renderIndex = (req, res) => {
	res.render('index', { products });
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

	res.render('product', { item, products });
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

	res.render('cart', { cart });
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
		};
	} else {
		item = {
			product: product,
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
		counter++;

		if (item.product.id == req.params.id) {
			drop = counter;
		}
	});

	// Borrando el producto
	cart.splice(drop, 1);

	// Guardando los cambios del carrito
	res.cookie('cart', cart);

	res.redirect('/cart');
};

module.exports = indexCtrl;
