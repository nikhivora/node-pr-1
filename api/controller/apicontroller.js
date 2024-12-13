const apicall=(req, res)=>{
 return res.status(200).send({
    success:true,
    message:`api  successfully celled`
 })
}

module.exports={
    apicall
}