'use strict'

import dotenv from 'dotenv'

if (process.env.NODE_ENV !== 'production') {
  dotenv.config()
}

const config = {
  /*
  |--------------------------------------------------------------------------
  | Application Name
  |--------------------------------------------------------------------------
  |
  | This value is the name of your application. This value is used when the
  | framework needs to place the application's name in a notification or
  | any other location as required by the application or its packages.
  |
  */
  name: process.env.API_NAME ?? 'Application',

  /*
  |--------------------------------------------------------------------------
  | Application Environment
  |--------------------------------------------------------------------------
  |
  | This value determines the "environment" your application is currently
  | running in. This may determine how you prefer to configure various
  | services the application utilizes. Set this in your ".env" file.
  |
  */
  env: process.env.NODE_ENV ?? 'development',

  /*
  |--------------------------------------------------------------------------
  | Application Debug Mode
  |--------------------------------------------------------------------------
  |
  | When your application is in debug mode, detailed error messages with
  | stack traces will be shown on every error that occurs within your
  | application. If disabled, a simple generic error page is shown.
  |
  */
  debug: process.env.API_DEBUB ?? false,

  /*
  |--------------------------------------------------------------------------
  | Application API_URL
  |--------------------------------------------------------------------------
  |
  | This URL is used by the console to properly generate URLs when using
  | the Nodemon command line tool. You should set this to the root of
  | your application so that it is used when running Nodemon.
  |
  */
  url: process.env.API_URL ?? 'http://localhost',

  /*
  |--------------------------------------------------------------------------
  | Application HOST
  |--------------------------------------------------------------------------
  |
  | This URL is used by the console to properly generate URLs when using
  | the Artisan command line tool. You should set this to the root of
  | your application so that it is used when running Artisan tasks.
  |
  */
  host: process.env.HOST ?? '127.0.0.1',

  /*
  |--------------------------------------------------------------------------
  | Application PORT
  |--------------------------------------------------------------------------
  |
  | This URL is used by the console to properly generate URLs when using
  | the Artisan command line tool. You should set this to the root of
  | your application so that it is used when running Artisan tasks.
  |
  */
  port: process.env.PORT ?? 3000,

  /*
  |--------------------------------------------------------------------------
  | Database URL
  |--------------------------------------------------------------------------
  |
  | This value is the name of your database. This value is used when the
  | application needs to place the database's name in a notification or
  | any other location as required by the application or its packages.
  |
  */
  database: {
    engine: process.env.DATABASE_ENGINE ?? 'mongodb',
    host: process.env.DATABASE_HOST ?? '127.0.0.1',
    port: process.env.DATABASE_PORT ?? 27017,
    user: process.env.DATABASE_USER ?? 'root',
    pass: process.env.DATABASE_PASS ?? '12345',
    name: process.env.DATABASE_NAME ?? 'mydb',
  },
}

export default config
