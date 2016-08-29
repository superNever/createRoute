// entry
var server = require('./server.js');
var route = require('./route.js');
var requestHandlers = require('./requestHandlers.js');

var handle = {};
handle['/'] = requestHandlers.start;
handle['/start'] = requestHandlers.start;
handle['/upload'] = requestHandlers.upload;

server.start(route.route,handle);