const jwt=require('jsonwebtoken')
const  verifyToken=async(req, res)=>{
try {
    const token=req.headers.authorization
 
  
    if (!token) {
        return res.status(501).send({
            success : false,
            message : "Token Is blank"
        })
    }
    let newtoken=token.slice(7)
  
    
    jwt.verify(newtoken,"vora",(err,decodetoken)=>{
    if (err) {
        return res.status(400).send({
            success : false,
            message : "Token is not valid",
        })   
    }
            res.user = decodetoken.payload;
            console.log(res.user);
            
            return next();
    })
} catch (error) {
    return res.status(501).send({
        success : false,
        err : error
    })
}

}

const admin=async(req, res)=>{
try {
    console.log(res.user.role);
    
} catch (error) {
    console.log(error);
    
}
}

module.exports={
    verifyToken,admin
}