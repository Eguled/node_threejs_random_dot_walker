var express = require('express');
var app = module.exports = express();
var http  	= require('http');
var path    = require('path');
var server 	= require('http').createServer(app);

app.set('views', __dirname + '/views');

app.get('/node_modules/three/three.min.js', function(req, res){
    res.sendFile(__dirname + '/node_modules/three/three.min.js');
});

app.get('/', function(req, res){
	res.sendFile(__dirname + '/views/index.html');
});

app.use('/node_modules',  express.static(__dirname + '/node_modules'));
app.use('/js',  express.static(__dirname + '/js')); 

server.listen(process.env.PORT || 3000, function () {
    console.log("-------------------------------------------------------|")
    console.log('Server created successfully                            |')
    console.log("-------------------------------------------------------|")
});