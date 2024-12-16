const mongoose=require('mongoose')

const userschema=mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    city:{
        type:String,
        require:true
    },
    
})
const user=mongoose.model('user',userschema)
module.exports=user