var socket = io();

// Esto es para escuchar
socket.on('connect', function()	{
	console.log('Conectado al servidor.');
})

socket.on('disconnect', function()	{
	console.log('Perdimos conexión con el servidor.');
})

// Enviar información
socket.emit('enviarMensaje', {
	usuario: 'Matias',
	mensaje: 'Hola, mundo!'
}, function (respuesta) {
	console.log('Respuesta del Servidor: ', respuesta);
});

// Escuchar información
socket.on('enviarMensaje', (mensaje) => {
	console.log('Info del Servidor: ', mensaje);
})