//const mongoose = require('mongoose');
//mongoose.connect("mongodb://localhost:27017/company");

const express = require ('express')

const app = express();

/* app.get('/',function(req,res){
    res.send('Get Method')
})

app.all('*',(req,res)=>{
    res.send('Page not founDynamic Routes Part 1')
})  */

app.get('/cd',(req , res , next)=>{
    console.log('first callback')
    next()
},
(req , res)=>{
    console.log('second callback')
    res.send('its time to do think roung')
})

app.listen(3000)