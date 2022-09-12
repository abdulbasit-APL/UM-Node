const mongoose = require('mongoose')

const addressSchema = new mongoose.Schema({
    city: String,
    country: String,
})

const depotSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    address: addressSchema,
    sponsorid: Number,
    supported_countries: [],
    modifiedOn:Date,
    createdOn:Date,
    isactive: Boolean,
    createdBy: Number,
    modifiedBy: Number,
})

const DepotCollection = mongoose.model('depot', depotSchema)

module.exports = DepotCollection
