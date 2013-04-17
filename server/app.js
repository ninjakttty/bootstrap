 var restify = require('restify');

 var server = restify.createServer();
 var router = require('./routes.js')(server);

 server.listen(8080, function() {
   console.log('%s listening at %s', server.name, server.url);
 });