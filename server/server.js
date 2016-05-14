var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var serialport = require('serialport');
var SerialPort = serialport.SerialPort;
var portName = '/dev/cu.usbmodem621';

var sp = new SerialPort(portName, {
    baudRate: 9600,
    parser: serialport.parsers.readline("\n")
});

sp.on('data', function(socket, data) {
    console.log(data);
    sendLight(data, socket);
});

var sendLight = function(arduinoMessage, socket) {
    // send the message to the client
    socket.volatile.emit('notification', arduinoMessage);
};

app.get('/', function(req, res){
    res.sendfile('public/index.html');
});

app.use(express.static('public'));

io.sockets.on('connection', function(socket){
    console.log('a user connected');
    sp.on('data', function(data) {
        //sendLight(data, socket);
    });

    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});