'use strict';

require('dotenv').config();

const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;

let mongodbUri = (process.env.APP_DEBUG === "true")
        ? `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`
        : `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

module.exports = {
    host: process.env.APP_HOST || '127.0.0.1',
    port: process.env.APP_PORT || 3000,
    db: {
        uri: process.env.MONGODB_URI || mongodbUri,
    },
};
