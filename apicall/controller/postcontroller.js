const post=require('../models/postmodels')
const addpost=async(req, res)=>{
try {

    const {title,desc}=req.body
    
const users= await post.create({
    userid:req.user._id,
    title:title,
    desc:desc,
    image:req.file.path

})
return res.status(200).send({
    success : true,
    messsge:"user register sucessfully",
    users
})


} catch (error) {
    return res.status(501).send({
        success : false,
        err : error
    })
}
}

module.exports={
    addpost
}