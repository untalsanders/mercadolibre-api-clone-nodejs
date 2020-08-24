'use strict';

require('dotenv').config();

const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_NAME = process.env.DB_NAME;

module.exports = {
    host: process.env.APP_HOST || '127.0.0.1',
    port: process.env.APP_PORT || 3000,
    db: {
        uri: process.env.MONGODB || `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`,
    },
};
