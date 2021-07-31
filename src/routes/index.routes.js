const router = require('express').Router();

const {
	renderIndex,
	renderProducts,
	renderSingin,
	renderSingup,
} = require('../controllers/index.controllers');

router.get('/', renderIndex);

router.get('/products', renderProducts);

router.get('/singin', renderSingin);

router.get('/singup', renderSingup);

module.exports = router;
