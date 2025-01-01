const mongoose=require('mongoose')


const userschama=mongoose.Schema({
   pname:{
        type:String,
        require:true
    },
    price:{
        type:String,
        require:true
    },
    qty:{
        type:String,
        default:"1",
    },
    desc:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    },
})

const produact=mongoose.model('cart',userschama)

module.exports=produact