const app = require('./server');

// listening the Server
app.listen(app.get('port'), () => {
	console.log('Server on port', app.get('port'));
});
