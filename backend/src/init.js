const express = require('express')
const morgan = require('morgan')
const bodyParse = require('body-parser')
const router = require('./routes/index')
require('dotenv').config();
const mysql = require('mysql')
const cors = require('cors')
const myConnection = require('express-myconnection')

let _server


const server = {
    start() {

        const app = express()

        app.disable('x-powered-by')
        app.set('env', process.env.NODE_ENV)

        if (process.env.NODE_ENV !== 'test') {
            app.use(morgan('combined'))
        }


        app.use(bodyParse.json())
        app.use(bodyParse.urlencoded({ extended: false }))
        app.use(cors())

        
        app.use(myConnection(mysql, {
            host: process.env.HOST_DB,
            user: process.env.USER_DB,
            password: process.env.PASSWORD_DB,
            port: process.env.PORT_DB,
            database: process.env.DATABASE_DB
        }, 'single'))


        
        router(app)

        _server = app.listen(process.env.PORT, () => {
            console.log(`Servidor arrancado en http://localhost:${process.env.PORT}`)
        })
    },
    close() {
        _server.close()
    }
}

module.exports = server


if (!module.parent) {
    server.start()
}
