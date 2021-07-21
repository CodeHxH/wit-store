const indexCtrl = {};

indexCtrl.renderIndex = (req, res) => {
	const products = [
		{
			price: 8.0,
			name: 'Camiseta Lost in Paradise',
			description:
				'Camiseta básica, 50% algodón 50% poliéster, bordado reflejante, hecha en USA.',
			img: '/img/product.jpg',
		},
		{
			price: 8.0,
			name: 'Camiseta Lost in Paradise',
			description:
				'Camiseta básica, 50% algodón 50% poliéster, bordado reflejante, hecha en USA.',
			img: '/img/product1.jpg',
		},
		{
			price: 8.0,
			name: 'Camiseta Lost in Paradise',
			description:
				'Camiseta básica, 50% algodón 50% poliéster, bordado reflejante, hecha en USA.',
			img: '/img/product2.jpg',
		},
		{
			price: 8.0,
			name: 'Camiseta Lost in Paradise',
			description:
				'Camiseta básica, 50% algodón 50% poliéster, bordado reflejante, hecha en USA.',
			img: '/img/product3.jpg',
		},
		{
			price: 8.0,
			name: 'Camiseta Lost in Paradise',
			description:
				'Camiseta básica, 50% algodón 50% poliéster, bordado reflejante, hecha en USA.',
			img: '/img/product4.jpg',
		},
	];
	res.render('index', { products });
};

module.exports = indexCtrl;
