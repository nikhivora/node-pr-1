
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
    console.log(error);
}
}

module.exports={
    adddata
}