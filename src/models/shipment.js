const mongoose = require('mongoose')

const shipmentTrackingSchema = new mongoose.Schema({})
const shipmentFromSchema = new mongoose.Schema({})
const shipmentToSchema = new mongoose.Schema({})
const shipmentKitsSchema = new mongoose.Schema({})


const shipmentSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    from:shipmentFromSchema,
    to:shipmentToSchema,
    kits:[shipmentKitsSchema],
    tags:[String],
    sponsorId:Number,
    tracking: [shipmentTrackingSchema],
})

const ShipmentCollection = mongoose.model('shipments', shipmentSchema)

module.exports = ShipmentCollection
