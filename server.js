const http = require('http');
const app = require('./app');

//const port = process.env.PORT || 5000;
const port = 5050;

const server = http.createServer(app);

server.listen(port);
