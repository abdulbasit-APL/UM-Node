const express = require('express')
const companyService  = require('../services/company')
const { globalResponseHandler } = require('../utils/global/responseHandler')

const router = express.Router()

// GET all users
router.get('/', async (req, res) => {
    // #swagger.tags = ['User']
    // #swagger.description = 'Get logged in user.'
    const companies = await companyService.findAll()
    return globalResponseHandler(req, res, 200, 'Companies', companies)
})

module.exports = router
