const mongoose = require('mongoose')

const ees =  mongoose.Schema({
        name:{
            type:String,
             required:true
        },
        email:{
            type:String,
            required:true
        },
        mobile:{
            type:Number,
            required:true
        },
        passward:{
            type:String,
            required:true
        }
})

const ees = mongoose.model("ees", ees)

module.exports = ees;