const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger.json'
const endpointsFiles = ['src/controllers/user.js']

swaggerAutogen(outputFile, endpointsFiles)
