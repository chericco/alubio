const companies = require('./companies')
const owners = require('./owners')

module.exports = app => {

    app.use('/companies', companies)
    app.use('/owners', owners)

    app.use((req, res, next) => {

        res.json('404', {
            Error: 'La ruta que esta intentando acceder no existe!'
        })

        next()
    })

}