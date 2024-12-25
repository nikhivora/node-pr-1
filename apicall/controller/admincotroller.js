const post=require('../models/postmodels')

 
const allPost=async(req, res)=>{


    const allpost=await post.find({}).populate('userid')

    return res.status(200).send({
        success:true,
        message:'view all post',
        allpost

    })
}

module.exports={
    allPost
}