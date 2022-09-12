const mongoose = require('mongoose')
const countrySchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    status:String,
    tags:[String]
})

const CountryCollection = mongoose.model('countries', countrySchema)

module.exports = CountryCollection
