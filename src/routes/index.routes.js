const router = require('express').Router();

const {
	renderIndex,
	renderProducts,
} = require('../controllers/index.controllers');

router.get('/', renderIndex);

router.get('/products', renderProducts);

module.exports = router;
