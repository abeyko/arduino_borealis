//var socket = io();
var socket = io.connect('http://localhost:3000');
var lightValue;

socket.on('notification', function(msg){
    lightValue = msg;
    console.log('This is the light value', lightValue);
});