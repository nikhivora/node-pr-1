const mongoose=require('mongoose')


const blogpost=mongoose.Schema({
    usersid:{
type:mongoose.Schema.type.ObjectId,
ref:'users'
    },
    title:{
        type:String,
        require:true
    },
    desc:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    }
})

const postmodels=mongoose.model('blogpost',blogpost)

module.exports= postmodels
