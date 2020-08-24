'use strict';

const mongoose = require('mongoose');
const moment = require('moment');
const config = require('./config');
const server = require('./server');

const dateNow = moment().format('YYYY/MM/DD HH:mm:ss Z');

const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

mongoose
    .connect(config.db.uri, mongooseOptions)
    .then(() => console.info(`${dateNow} - DATABASE: Connection has been successfuly!`))
    .catch((error) => console.error(`${dateNow} - DATABASE: Error in initial connection: ${error.reason()}`));

mongoose.connection.on('error', (err) => console.error(err));

server.listen(config.port, config.host, () => {
    console.info(`${dateNow} - API: Running on http://${config.host}:${config.port}`);
});
