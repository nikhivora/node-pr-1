const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost/blog-passport')


const database=mongoose.connection


database.on('connected',(err)=>{
    if (err) {
        console.log(err);   
    }

    console.log('db is connected');
    
})

module.exports=database