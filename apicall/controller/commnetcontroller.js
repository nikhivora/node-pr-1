const commnetmodels=require('../models/commentmodels')
const postmodels=require('../models/postmodels')
const addCommnet=async(req, res)=>{
try {
 const postid=req.query.id;
 const post=await postmodels.findOne({_id:postid})
 if (post) {
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
}else{
    return res.status(501).send({
        success : false,
        messsge:"post id is wrong",
       
    })
    
}

    
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