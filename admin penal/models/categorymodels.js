const mongoose=require('mongoose')


const userschama=mongoose.Schema({
   category:{
        type:String,
        require:true
    },
   status:{
        type:String,
        status:'deactive'
    }
})

const category=mongoose.model('category',userschama)

module.exports=category