const router = require('express').Router();

const {
	renderIndex,
	renderProducts,
	renderProduct,
	renderSingin,
	renderSingup,
} = require('../controllers/index.controllers');

router.get('/', renderIndex);

router.get('/products', renderProducts);

router.get('/products/:id', renderProduct);

router.get('/singin', renderSingin);

router.get('/singup', renderSingup);

module.exports = router;
