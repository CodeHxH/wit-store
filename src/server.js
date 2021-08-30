const handlebars = require('handlebars');
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const flash = require('connect-flash');
const methodOverride = require('method-override');
const morgan = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');

// initialization
const app = express();

// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine(
	'.hbs',
	exphbs({
		defaultLayout: 'main',
		layoutsDir: path.join(app.get('views'), 'layouts'),
		partialsDir: path.join(app.get('views'), 'partials'),
		extname: '.hbs',
		handlebars: handlebars,
	})
);
app.set('view engine', '.hbs');

// middlewares
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
	session({
		secret: 'secret',
		resave: true,
		saveUninitialized: true,
	})
);
app.use(flash());

//console.log(v4());

// Global Variables
app.use((req, res, next) => {
	res.locals.success_msg = req.flash('success_msg');
	next();
});

// routes
app.use(require('./routes/index.routes'));

// static files
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
