const authCtrl = {};

// Crear una cookie para el carrito
authCtrl.createCart = (req, res, next) => {
	if (req.cookies.cart != true) {
		res.cookie('cart', []);
	}

	next();
};

module.exports = authCtrl;
