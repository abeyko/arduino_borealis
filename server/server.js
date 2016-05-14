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

sp.on('data', function(input) {
    console.log(input);
});

app.get('/', function(req, res){
    res.sendfile('public/index.html');
});

app.use(express.static('public'));

io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
});

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});