const express = require('express')

const userController = require('./user')
const companyController = require('./company')
const departmentController = require('./department')
const { globalResponseHandler } = require('../utils/global/responseHandler')
const { appHome } = require('../services')

const router = express.Router()

router.get('/', (req, res) => {
    // #swagger.tags = ['App']
    // #swagger.description = 'App is running.'
    return globalResponseHandler(req, res, 200, 'Korio', appHome())
})

router.use('/users', userController)
router.use("/companies", companyController)
router.use("/departments", departmentController)

module.exports = router
