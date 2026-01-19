require('dotenv').config();

const http = require('node:http');
const handler = require('./handler');

const PORT_SERVER = process.env.PORT;

const httpServer = http.createServer(handler).listen(PORT_SERVER, console.log(`Server running in port: ${PORT_SERVER}`));

module.exports = httpServer;