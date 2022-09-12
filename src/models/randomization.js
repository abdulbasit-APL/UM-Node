const mongoose = require('mongoose')
const randomizationSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    inputs:[],
    randomizationTechinque: String,
})

const RandomizationCollection = mongoose.model('randomizations', randomizationSchema)

module.exports = RandomizationCollection
