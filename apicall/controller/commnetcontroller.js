const commnetmodels=require('../models/commentmodels')
const addCommnet=async(req, res)=>{
try {
    
 const postid=req.query.id;
const {commnet}=req.body
 const com=await commnetmodels.create({
    userid:req.user._id,
    postid:postid,
    comment:commnet
 })
return res.status(200).send({
    success : true,
        messsge:"commnet  sucessfully ",
        com
})

    
} catch (error) {
    return res.status(501).send({
        success : false,
        err : error
    })
}


}

module.exports={
    addCommnet
}