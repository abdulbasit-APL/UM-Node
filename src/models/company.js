const mongoose = require('mongoose')
const companySchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
})

const CompanyCollection = mongoose.model('companies', companySchema)

module.exports = CompanyCollection
