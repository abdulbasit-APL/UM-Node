const mongoose = require('mongoose')

const kitSchema = new mongoose.Schema({
    name:String,
    id:Number,
});

const sequenceSchema = new mongoose.Schema({
    start:String,
    end:String,
});

const batchSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    deootName: String,
    depotId:Number,
    countries:[],
    kit:kitSchema,
    sequence:sequenceSchema,
    prtocol:[],
    quantity:Number,
    sponsorId:Number,
    isBrightStock:Boolean,
    expiryDate:Date,
    tags:[String],
    batchNumber:String,
    lot:String,
    status:String,
    status_timestamp:String,
    lotNumber:String,
    createdon:String,
    modifiedon:String,
    created_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    modified_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },


})

const BatchCollection = mongoose.model('batches', batchSchema)

module.exports = BatchCollection
