'use strict'

import dotenv from 'dotenv'

const MONGODB_NAME = process.env.NODE_ENV !== 'production' ? 'db-ml-api-clone-dev' : 'db-ml-api-clone'

if (process.env.APP_ENV !== 'production') {
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
    name: process.env.APP_NAME ?? 'Application',

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
    env: process.env.APP_ENV ?? 'production',

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

    debug: process.env.APP_DEBUB ?? false,

    /*
    |--------------------------------------------------------------------------
    | Application URL
    |--------------------------------------------------------------------------
    |
    | This URL is used by the console to properly generate URLs when using
    | the Artisan command line tool. You should set this to the root of
    | your application so that it is used when running Artisan tasks.
    |
    */
    url: process.env.APP_URL ?? 'http://localhost',
    host: process.env.HOST ?? '127.0.0.1',
    port: process.env.PORT ?? 3000,
    mongodb_uri: process.env.MONGODB_URI ?? `mongodb://127.0.0.1:27017/${MONGODB_NAME}`,
}

export default config
