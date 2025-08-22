'use strict'

import chalk from 'chalk'
import mongoose from 'mongoose'
import config from './config.js'

const { connect, connection } = mongoose

const url = `${config.database.engine}://${config.database.user}:${config.database.pass}@${config.database.host}:${config.database.port}/${config.database.engine === 'mongodb' ? 'authMechanism=SCRAM-SHA-256' : ''}`
const options = { dbName: config.database.name }

mongoose.set('strictQuery', false)

await connect(url, options)
  .then(() => console.log(`${chalk.black.bold.bgWhite(' DB ')} ${chalk.green(` Connection has been successfully! `)}`))
  .catch(err => console.log(`${chalk.white.bold.bgRed(' ERROR ')} in initial connection -> ${chalk.red(err.message)}`))

if (config.env !== 'production') {
  connection.on('error', err => console.error(err))
}
