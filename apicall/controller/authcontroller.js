const usersmodels=require('../models/usermodels')
const jwt=require('jsonwebtoken')

const loginuser=async(req ,res)=>{


    try {
        const {email,password} = req.body;
      
        
        if (!email||!password) {
            return res.status(500).send({
                success : false,
                message : "All filed is required"
            })
        }
        let user = await usersmodels.findOne({email : email});
        console.log(user);
        
        if(!user || user.password != password){
            return res.status(500).send({
                success : false,
                message : "Email and Password not valid",
            })
        }
        
const token=await jwt.sign({user:user},"vora",{expiresIn:"1hr"})
console.log(token);
return res.status(200).send({
    success : true,
    token : token
})

    } catch (error) {
        return res.status(500).send({
            success : false,
            err : error
        })
    }
}


module.exports={
    loginuser
}