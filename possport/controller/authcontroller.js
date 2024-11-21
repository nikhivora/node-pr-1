
const usermodels=require('../models/usermodels')
const registerpage= (req, res)=>{
res.render('res')
}
const loginpage= (req, res)=>{
res.render('login')
}
const dashpage= (req, res)=>{
res.render('dash')
}

const registerusers=async(req ,res)=>{
    try {
        
const {name,email,password}=req.body
        await usermodels.create({
            name:name,
            email:email,
            password:password,
        })
        return res.redirect('/')
        
    } catch (error) {
        console.log(error);
        
    }
}

const loginuser= async (req, res)=>{
    res.redirect('/dash')

}

module.exports={
    registerpage,registerusers,loginpage,loginuser,dashpage
}