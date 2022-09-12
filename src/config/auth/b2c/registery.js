const BearerStrategy = require('passport-azure-ad').BearerStrategy
const passportRegistry = require('passport')
const config = {
    credentials: {
        tenantID: process.env.B2C_CREDENTIAL_TENANT_ID,
        clientID: process.env.B2C_CREDENTIAL_CLIENT_ID,
        audience: process.env.B2C_CREDENTIAL_AUDIENCE,
    },
    resource: {
        scope: ['access_as_user'],
    },
    metadata: {
        authority: 'login.microsoftonline.com',
        discovery: '.well-known/openid-configuration',
        version: 'v2.0',
    },
    settings: {
        validateIssuer: true,
        passReqToCallback: false,
        loggingLevel: 'info',
    },
}

// Set the Azure AD B2C options
const options = {
    identityMetadata: `https://login.microsoftonline.com/${config.credentials.tenantID}/v2.0/${config.metadata.discovery}`,
    issuer: `https://${config.metadata.authority}/${config.credentials.tenantID}/${config.metadata.version}`,
    clientID: config.credentials.clientID,
    audience: config.credentials.audience,
    validateIssuer: config.settings.validateIssuer,
    passReqToCallback: config.settings.passReqToCallback,
    loggingLevel: config.settings.loggingLevel,
    scope: config.resource.scope,
}
const bearerStrategy = new BearerStrategy(options, (token, done) => {
    // Send user info using the second argument
    done(null, {}, token)
})

passportRegistry.use(bearerStrategy)

module.exports = { passportRegistry, bearerStrategy }
