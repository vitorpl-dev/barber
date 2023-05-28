var socket = io('http://localhost:8000');

socket.on('connect', function () {
	console.log('Conectado ao servidor Socket.io');
});

socket.on('notification', function (data) {
	console.log(data);
});
