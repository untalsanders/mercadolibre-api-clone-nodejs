'use strict'

import dotenv from 'dotenv'

if (process.env.NODE_ENV !== 'production') {
    dotenv.config()
}

const config = {
    HOST: process.env.HOST || 'localhost',
    PORT: process.env.PORT || 3000,
    MONGODB_URI: process.env.MONGODB_URI || `mongodb://127.0.0.1:27017/products-api-${process.env.NODE_ENV}`,
}

export default config


