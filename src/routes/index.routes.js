const router = require('express').Router();

const {
	renderIndex,
	renderProducts,
	renderProduct,
	renderSingin,
	renderSingup,
	renderCart,
	addProduct,
	deleteProduct,
} = require('../controllers/index.controllers');

// Crear una cookie para el carrito
const { createCart } = require('../helpers/auth');

// Index
router.get('/', createCart, renderIndex);

// Productos
router.get('/products', createCart, renderProducts);

// Producto
router.get('/products/:id', createCart, renderProduct);

// Inicio de sesión
router.get('/singin', renderSingin);

// Registro
router.get('/singup', renderSingup);

// Carrito
router.get('/cart', createCart, renderCart);

// Añadir productos al carrito
router.post('/add-product', createCart, addProduct);

// Eliminar productos del carrito
router.get('/delete-product/:id', createCart, deleteProduct);

module.exports = router;
