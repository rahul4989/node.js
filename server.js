const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

 var app = express();
 app.set('view engine','hbs');
 app.use((req,res,next) =>{
     var now = new Date().toString();
     console.log(`${now}: ${req.method} ${req.url}`);
     next();
 })
 app.get('/about',(req,res)=>{
     res.render('about.hbs',{
       pageTitle:'Aboutt',
       currentYear:new Date().getFullYear()
     })
 });





 app.listen(3000);