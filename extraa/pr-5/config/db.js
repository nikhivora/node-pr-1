
const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost/usernew')

const database=mongoose.connection

database.on('connected',(err)=>{
  if (err) {

    console.log(err);
  }
  console.log('db id connected');
})

module.exports=database