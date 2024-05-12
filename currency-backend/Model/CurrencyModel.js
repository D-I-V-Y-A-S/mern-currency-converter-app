const mongoose = require('mongoose')

const currencySchema = new mongoose.Schema(
    {
        code : {
            type:String,
            required:true
                },
        value : {
            type:Number,
            required:true
        }
    },
    {
        collection : 'currency'
    }
)

module.exports = mongoose.model('currency', currencySchema)