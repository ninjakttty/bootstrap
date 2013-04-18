var controller = require('./controllers/hello.js');

module.exports = function(server) {
	// TODO actually do something useful
	server.get('/hello', controller.getHello);
};
