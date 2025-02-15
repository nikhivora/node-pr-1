const express=require('express')
 
const port=9000

const app=express()


const db=require('./config/db')


const cors = require('cors'); 
app.use(cors());

app.use(express.urlencoded())

app.use('/',require('./routes/indexroutes'))

app.listen(port,(err)=>{
    if (err) {
        console.log(err);
    }

    console.log("server is runing ",port);

})