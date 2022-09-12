const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    _id: { type: Number },
    name: { type: String },
    sponsor: { type: String },
    designation: { type: String },
    module_access: [String],
    deleted: { type: Boolean, default: false },
    status: { type: String },
    modifiedOn: { type: Date, default: Date.now },
    createdOn: { type: Date, default: Date.now },
    created_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    modified_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
})

const User = mongoose.model('users', userSchema)

module.exports = User
