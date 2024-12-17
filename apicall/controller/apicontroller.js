
const usermodels=require('../models/usermodels')
const adddata=async(req, res)=>{
try {

    const {name,password,email,city}=req.body

    

    const users=await usermodels.create({
        name:name,
        password:password,
        email:email,
        city:city
    })

return res.status(200).send({
    sucess:true,
    users
})
    
} catch (error) {
    return res.status(500).send({
        sucess:false,
        err:error
    })
}

}

const viewuser=(req , res)=>{

}

module.exports={
    adddata,viewuser
}