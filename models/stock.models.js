const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
    Id: { required: true, type: String },
    stockName: { required: true, type: String },
    phoneNumber: { required: true, type: String },
    industry: { required: true, type: String },
    registrationNumber: { required: true, type: String },
    stockType: {
        type: String,
        required: true,
        enum: {
            values: ["COMMON", "PREFERRED", "BOND"],
            message: "{value} is not a valid stock type",
        }
    },
    issuanceDate: { 
        required: true, 
        type: Date,
        default: new Date(), 
    },
    updateTime: { required: false, type: Date },
});


module.exports = mongoose.model('stock', stockSchema);