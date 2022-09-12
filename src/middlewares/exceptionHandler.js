const { globalResponseHandler } = require('../utils/global/responseHandler')

function notFound(req, res, next) {
    res.status(404)
    throw Error(`Cannot ${req.method} ${req.url}`)
}

/* eslint-disable no-unused-vars */
function errorHandler(err, req, res, next) {
    console.error(`Exception handled with error message: '${err.message}'`)
    let statusCode = err.statusCode
        ? err.statusCode
        : res.statusCode !== 200
        ? res.statusCode
        : 500
    globalResponseHandler(
        req,
        res,
        statusCode,
        statusCode === 500 ? 'Something went wrong!' : err.message
    )
}

module.exports = {
    notFound,
    errorHandler,
}
