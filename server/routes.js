var controller = require('./controllers/hello.js');

module.exports = function(server) {
	server.get('/hello', controller.getHello);
};
