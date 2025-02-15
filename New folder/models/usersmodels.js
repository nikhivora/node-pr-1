const mongoose=require('mongoose')

const usersschema=mongoose.Schema({
    name:{
        require:true,
        type:String
    },
    email:{
        require:true,
        type:String
    },
    password:{
        require:true,
        type:String
    },
})

const users=mongoose.model("users", usersschema)

module.exports= users
