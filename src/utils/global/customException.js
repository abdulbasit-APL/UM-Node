class CustomException extends Error {
    constructor(status, message) {
        super(message)
        Error.captureStackTrace(this, this.constructor)

        this.name = this.constructor.name
        this.message = message
        this.statusCode = status
    }
}

module.exports = CustomException
