'use strict';


const express = require('express');
const api = require('./routes/routes');
const server = express();

server.use(express.json());
server.use(express.urlencoded({extended: true}));
server.use('/api', api);

module.exports = server;
