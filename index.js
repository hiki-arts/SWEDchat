var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

/*
app.get('/', function(req, res){
  res.send("<h1>Don't hurt me... No more.</h1>");
});
*/


app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});


io.on('connection', function(socket){
	
  console.log('a user connected');
  
  socket.on('chat message', function(msg){
    console.log('[log-msg]: ' + msg);
	io.emit('chat message', msg);
  });
  
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  
});

http.listen(3000, function(){
  console.log('listening on *:3000');
  console.log('sentFile: ' + __dirname + '\\index.html');
});