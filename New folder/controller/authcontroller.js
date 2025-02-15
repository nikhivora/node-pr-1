const usersmodel=require('../models/usersmodels')
const resegiterusers=  async(req, res)=>{
try {

    const {email, password,name}=req.body
    
 const users= await usersmodel.create({
    email, password,name
 })
    console.log(users);
    
    return res.status(200).send({
        success:true,
        message:"users add sucessfully",
        users

    })


} catch (error) {
return res.status(501).send({
    success:false,
    massage:error.massage
})

}
}
const viewusers=async(req, res)=>{
try {

    const users= await usersmodel.find({})
    return res.status(200).send({
        success:true,
        length:users.length,
        message:"users delete sucessfully",
        users
     
    })
    
} catch (error) {
    return res.status(501).send({
        success:false,
        massage:error.massage
    })
}
}

const deleteusers=async(req, res)=>{


    try {
        const id=req.body.id
       
        const user= await usersmodel.findByIdAndDelete(id)

        return res.status(200).send({
            success:true,
            message:"users view sucessfully",

         
        })
    } catch (error) {
        return res.status(501).send({
            success:false,
            massage:error.massage
        })
    }
}

const updateusers=async(req, res)=>{
    try {


        const {email, password,name,id}=req.body
    
        const users= await usersmodel.findByIdAndUpdate(id,{
           email, password,name
        })
     
        return res.status(200).send({
            success:true,
            message:"users Upadte sucessfully",
            users
        })

        
    } catch (error) {
        return res.status(501).send({
            success:false,
            massage:error.massage
        })
    }
}


module.exports={
    resegiterusers,viewusers,deleteusers,updateusers
}