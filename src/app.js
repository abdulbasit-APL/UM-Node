const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')
require('dotenv').config()

const { passportRegistry } = require('./config/auth/b2c/registery')
const { connectDB } = require('./config/database')
const api = require('./controllers')
const exceptionHandlerMiddleware = require('./middlewares/exceptionHandler')
const app = express()

// Setup Mongo
connectDB()

//Setup Swagger
const swaggerUi = require('swagger-ui-express')
const { authenticationMiddleware } = require('./middlewares/authentication')
swaggerDocument = require('../swagger.json')

app.use(morgan('dev'))
app.use(helmet())
app.use(
    cors({
        origin: process.env.ALLOWED_ORIGINS,
    })
)
app.use(express.json())

// Passport registry
app.use(passportRegistry.initialize())

// Auth Middleware before routes to check each route
// app.use(authenticationMiddleware.authenticationMiddleware)

// Controllers
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use('/api/v1', api)
// app.use('/api/v1', api)
// End Controllers

//Middlewares
app.use(exceptionHandlerMiddleware.notFound)
app.use(exceptionHandlerMiddleware.errorHandler)
//End Middlewares

const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log(`Listening: http://localhost:${port}`)
})

module.exports = { app }
