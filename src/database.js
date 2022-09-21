'use strict'

import chalk from 'chalk'
import pkg from 'mongoose'
import { DB } from './config.js'

const { connect, connection } = pkg

const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

connect(DB.uri, mongooseOptions)
    .then(() => console.log(`${chalk.black.bold.bgWhite(' DB ')} ${chalk.green(' Connection has been successfuly! ')}`))
    .catch((err) =>
        console.log(`${chalk.white.bold.bgRed(' ERROR ')} in initial connection -> ${chalk.red(err.message)}`)
    )

if (process.env.NODE_ENV !== 'production') {
    connection.on('error', (err) => console.error(err))
}
