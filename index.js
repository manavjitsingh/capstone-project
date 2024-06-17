const express = require('express')
const app = express() // calls express function to start new Express app
const ejs = require('ejs') 
app.set('view engine','ejs') 
const path = require('path')
app.use(express.static('public'))
app.listen(3000,()=>{ console.log("App listening on port 3000")
})

// routing
app.get('/',(req,res)=>{
    res.render('index');
    })
app.get('/watches', (req, res) => {
    res.render('watches');
})
app.get('/register', (req, res) => {
    res.render('register');
})
app.get('/login', (req, res) => {
    res.render('login');
})
