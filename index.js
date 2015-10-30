var serverPort = 3000;
var serverModule = require('./server');
var UserHandling = require('./userhandling');
var userHandling = new UserHandling(serverModule.socketIOServer);

serverModule.httpServer.listen(serverPort, function() {
  console.log('HTTP Server listening on *:' + serverPort);
});
  