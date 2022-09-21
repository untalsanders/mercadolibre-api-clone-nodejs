'use strict'

import * as dotenv from 'dotenv'

if (process.env.NODE_ENV !== 'production') {
    dotenv.config()
}

export const HOST = process.env.HOST || 'localhost'
export const PORT = process.env.PORT || 3000
export const DB = { uri: process.env.MONGODB_URI }
