
// SOCKET IO bench
var io = require('node-socket.io-client');

function createClient(index, controller) {

  var client = new io.Socket(opts.url, opts);
  client.on('connect', function(){
    controller.clientConnect(index);

    client.send(JSON.stringify({ msg: message_counter++ }));
  });
  client.on('message', function(){
    controller.clientMessage(index);
  });
  client.on('disconnect', function(){
    controller.clientDisconnect(index);
  });
  client.connect();

  return client;
}

module.exports = createClient;
