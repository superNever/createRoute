// entry
var server = require('./server/server.js');
var route = require('./route/route.js');
var requestHandlers = require('./handlers/requestHandlers.js');

var handle = {};
handle['/'] = requestHandlers.start;
handle['/start'] = requestHandlers.start;
handle['/upload'] = requestHandlers.upload;

server.start(route.route,handle);