var http = require('http');
var express = require('express');

var port = process.env.port || 8005;

var app = express();
app.use(express.static('.'));

app.get('/', function (request, response) {
	response.sendfile("index.html");
});

app.listen(port);

module.exports = app;