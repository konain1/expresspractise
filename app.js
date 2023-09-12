

const express = require('express')
const app = express();

app.get('/',(req,res)=>{

    res.send('hi there')
})


app.listen(4500,()=>{
    console.log('port 4500')
})