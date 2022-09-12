const mongoose = require('mongoose')
const kitSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    id: Number,
    kitType: String,
    status: String,
    sponsorId: Number,
})

const KitCollection = mongoose.model('kits', kitSchema)

module.exports = KitCollection
