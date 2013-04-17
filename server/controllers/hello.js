module.exports = {
	getHello: function(req, res, next) {
		// res.setHeader('Access-Control-Allow-Origin', '*');
		res.send("Hello World");
		return next();
	}
}