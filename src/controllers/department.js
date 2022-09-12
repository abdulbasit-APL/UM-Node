const express = require('express')
const { index, userWithId } = require('../services/user')
const { globalResponseHandler } = require('../utils/global/responseHandler')

const router = express.Router()

// GET all users
router.get('/', async (req, res) => {
    return globalResponseHandler(req, res, 200, 'User', await index())
})


module.exports = router
