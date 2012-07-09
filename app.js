var express = require('express');
var app = express.createServer();
var io = require('socket.io').listen(app);

// Set the /public folder up as a static content folder
app.use(express.static(__dirname + '/public'));

// Start Express server listening on port 8234
app.listen(8234);

// Listen for a connection
io.sockets.on('connection', function (socket) {
    
    // On connect, emit a system message to the client containing its client ID
    socket.emit('system', { status: 'Connected', id: socket.id });

    // socket.on('connect',function() {
    //     console.log('dummy user connected');
    // });

    // socket.on('disconnect',function() {
    //     console.log('disconnected');
    // });

    // Listen for a click event from the home page
    socket.on('canvasclicked', function (data) {

        // Emit the click co-ordinates to any viewers which are listening
        io.sockets.emit('clicklogged', { x: data.x, y: data.y, id: socket.id  });

    });

});