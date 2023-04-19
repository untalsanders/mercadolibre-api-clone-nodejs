'use strict'

import dotenv from 'dotenv'

if (process.env.NODE_ENV !== 'production') {
    dotenv.config()
}

const config = {
    ENV: process.env.NODE_ENV ?? 'production',
    HOST: process.env.HOST ?? 'localhost',
    PORT: process.env.PORT ?? 3000,
    MONGODB_URI: process.env.MONGODB_URI ?? 'mongodb://127.0.0.1:27017/products-api-development',
    BASE_URL: process.env.BASE_URL ?? 'http://localhost:3000',
}

export default config
