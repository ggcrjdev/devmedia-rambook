process.title = 'App Server RAMBook';
var ioTransports = ['websocket', 'flashsocket', 'htmlfile', 'xhr-polling', 'jsonp-polling', 'polling'];
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http, {
    origins: "*:*",
    transports: ioTransports
});

// Diz ao Express que o diretório web contém conteúdos estáticos
app.use(express.static(__dirname + '/web'));
   
// Exporta os módulos
module.exports.socketIOServer = io;
module.exports.httpServer = http;
