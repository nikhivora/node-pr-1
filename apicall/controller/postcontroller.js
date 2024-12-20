
const addpost=async(req, res)=>{
try {
    console.log(req.body);
    console.log(req.flie);
    

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