const mongoose = require('mongoose')
const ProtocolSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    id: Number,
    name: String,
    sponsorId: Number,
    sponsorName: String,
    modifiedOn: { type: Date, default: Date.now },
    createdOn: { type: Date, default: Date.now },
    created_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    modified_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    randomization:Number
})

const ProtocolCollection = mongoose.model('protocols', ProtocolSchema)

module.exports = ProtocolCollection
