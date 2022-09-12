const passport = require('passport')
// const { authMiddleware } = require('../constants/ExcludedRoutes.json')
const CustomException = require('../utils/global/customException')

async function authentication(req, res, next) {
    // const excludedRoutes = authMiddleware[req.method]
    // if (
    //     excludedRoutes &&
    //     excludedRoutes.length &&
    //     excludedRoutes.includes(req._parsedUrl.pathname)
    // ) {
    //     return next()
    // }
    passport.authenticate(
        'oauth-bearer',
        { session: false },
        function (err, user, info) {
            if (err || !user) {
                next(new CustomException(403, info))
            }
            req.user = user // Forward user information to the next middleware
            next()
        }
    )(req, res, next)
}

module.exports = { authenticationMiddleware: authentication }
