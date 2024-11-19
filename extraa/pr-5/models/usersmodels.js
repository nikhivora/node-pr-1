const { name } = require('ejs')
const mongoose=require('mongoose')


const userschama=mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    desc:{
        type:String,
        require:true
    },
    price:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    },
})

const user=mongoose.model('users',userschama)

module.exports=user