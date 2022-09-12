const express = require('express')
const { index, userWithId } = require('../services/user')
const { globalResponseHandler } = require('../utils/global/responseHandler')

const router = express.Router()

// GET all users
router.get('/', async (req, res) => {
    // #swagger.tags = ['User']
    // #swagger.description = 'Get logged in user.'
    return globalResponseHandler(req, res, 200, 'User', await index())
})

// GET Specific User with ID
router.get('/:id', async (req, res) => {
    // #swagger.tags = ['User']
    // #swagger.description = 'Get user by Id.'
    return globalResponseHandler(
        req,
        res,
        200,
        'User',
        await userWithId(req.params.id)
    )
})

module.exports = router
