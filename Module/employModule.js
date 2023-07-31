const mongoose = require('mongoose')

const employees =  mongoose.Schema({
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

const Employees = mongoose.model("Employees", employees)

module.exports = Employees;