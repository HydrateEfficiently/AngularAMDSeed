var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');

var port = process.env.port || 8005;

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('.'));

app.get('/', function (request, response) {
	response.sendfile("index.html");
});

app.listen(port);

module.exports = app;