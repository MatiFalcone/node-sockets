const express = require('express');
const path = require('path');
const colors = require('colors');
// Configuraciones para usar sockets
const socketIO = require('socket.io');
const http = require('http');

const app = express();
const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));

// Creo el server para sockets y le paso el Express
let server = http.createServer(app);

// IO = esta es la comunicación del backend
module.exports.io = socketIO(server);
require('./sockets/socket');

// Puerto
const port = process.env.PORT || 3000;

// Es server para usar los Sockets (no app)
server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});