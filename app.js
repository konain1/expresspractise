

const express = require('express')
const app = express();
const path = require('path')
const morgan = require('morgan')


app.use(express.static('public'))


// const logger = (req,res,next)=>{
//     console.log(`${new Date()} , ${req.url} , ${req.method}`)
//     next()
// }

// app.use('/contact',logger)

app.use(morgan('dev'))

app.get('/',(req,res)=>{

    res.sendFile(path.join(__dirname, 'index.html'))
})
app.get('/contact',(req,res)=>{

    res.sendFile(path.join(__dirname,'public' , 'contact.html'))
})
app.get('/service',(req,res)=>{

    res.sendFile(path.join(__dirname, 'public' ,'service.html'))
})

app.get('/product',(req,res)=>{

    res.sendFile(path.join(__dirname, 'public' ,'product.html'))
})

app.get('/json',(req,res)=>{

    res.json({
        name:"konain",
        school:"insan school"
    })
})
app.listen(4500,()=>{
    console.log('port 4500')
})