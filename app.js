

const express = require('express')
const app = express();
const path = require('path')

app.get('/',(req,res)=>{

    res.sendFile(path.join(__dirname, 'index.html'))
})
app.get('/contact',(req,res)=>{

    res.sendFile(path.join(__dirname, 'contact.html'))
})
app.get('/service',(req,res)=>{

    res.sendFile(path.join(__dirname, 'service.html'))
})

app.get('/product',(req,res)=>{

    res.sendFile(path.join(__dirname, 'product.html'))
})

app.listen(4500,()=>{
    console.log('port 4500')
})