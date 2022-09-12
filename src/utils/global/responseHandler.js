const responseHandler = (req, res, statusCode, message, data = null) => {
    res.status(statusCode).send({
        statusCode,
        message,
        data,
    })
}

module.exports = { globalResponseHandler: responseHandler }
