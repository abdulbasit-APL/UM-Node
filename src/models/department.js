const mongoose = require('mongoose')
const departmentSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
})

const DepartmentCollection = mongoose.model('departments', departmentSchema)

module.exports = DepartmentCollection
