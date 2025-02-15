
const jwt=require('jsonwebtoken')
const verifytoken=async(req , res)=>{
    try {
        const token=req.headers.authorization
        
        if (!token) {
            return res.status(501).send({
                success : false,
                message : "Token Is blank"
            })
        }
        const newtoken=token.slice(7)
     
        jwt.verify(newtoken,"VORA",{expiresIn:"1hr"},(err,decodetoken)=>{
            if (err) {
                return res.status(501).send({
                    success:false,
                    message: "Token is not valid",
                    error:error.message
                })
            }
            console.log(decodetoken.payload);
            req.user=decodetoken.payload
            return next();
        })
        
        
        
    } catch (error) {
        return res.status(501).send({
            success:false,
            error:error.message
        })
    }
}

module.exports={
    verifytoken
}