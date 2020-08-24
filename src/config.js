"use strict";

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

module.exports = {
    host: process.env.HOST || '0.0.0.0',
    port: process.env.PORT || 3000,
    db: {
        uri: process.env.MONGODB_URI
    }
};
