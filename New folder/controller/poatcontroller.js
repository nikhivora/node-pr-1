const addpost=async(req ,res)=>{
try {
console.log(req.body);

    
} catch (error) {
    return res.status(501).send({
        sucess:false,
        error:error
    })
}
}

module.exports={
    addpost
}