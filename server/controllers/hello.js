module.exports = {
	getHello: function(req, res, next) {
		res.send("Hello World");
		return next();
	}
}