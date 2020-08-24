'use strict';

const mongoose = require('mongoose');
const moment = require('moment');
const config = require('./config');
const server = require('./server');

const dateNow = moment().format('LTS');

const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

mongoose.connect(config.db.uri, mongooseOptions);
const conn = mongoose.connection;

conn.on('error', console.error.bind(console, 'connection error:'));
conn.once('open', function () {
    console.log('Conexión a la base de datos establecida.');

    server.listen(config.port, config.host, () => {
        console.log(`API REST running on http://${config.host}:${config.port} at ${dateNow}`);
    });
});
