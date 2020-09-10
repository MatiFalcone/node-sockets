const { io } = require('../server');

// Tengo una conexión del lado del cliente
io.on('connection', (client) => {

	console.log('Usuario conectado'.green);
	
	// Envío un mensaje al cliente que se conecta
	client.emit('enviarMensaje', {
		usuario: 'Admin',
		mensaje: '¡Bienvenido a esta aplicación!'
	});

	// Un cliente se desconectó	
	client.on('disconnect', () => {
		console.log('Usuario desconectado.'.red);
	})

	// Escucho al cliente enviar un mensaje
	client.on('enviarMensaje', (data, callback) => {
		
		console.log(data);

		client.broadcast.emit('enviarMensaje', data);

		/*
		if (mensaje.usuario) {
			callback({
				respuesta: 'Todo salió bien.'
			})
		} else {
			callback({
				respuesta: 'Todo salió mal.'
			})		
		}
		*/
	})

})

// Tengo una desconexión del lado del cliente
io.on('disconnection', (client) => {
	console.log('Usuario desconectado');
})