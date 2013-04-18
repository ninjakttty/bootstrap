var restify = require('restify');
var server = restify.createServer();
server.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	return next();
});


server.use(function(req, res, next) {
	//FIXME we should log to something better
	 console.log("restify:", req.url );
	return next();
});

var router = require('./routes.js')(server);
server.listen(8080, function() {
	console.log('%s listening at %s', server.name, server.url);
});