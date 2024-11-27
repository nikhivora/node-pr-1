const usersmodels=require('../models/usermodels')

const login=(req,res)=>{
    return res.render('login')
}
const resigiter=(req,res)=>{
    return res.render('resigiter')
}
const registeruser= async(req, res)=>{
    
    try {
        const {name,email,password,cpassword}=req.body;
        if (password==cpassword) {
            
            await usersmodels.create({
                name,email, password,cpassword
            })
            return res.redirect('/')
        }
    console.log('password is Not sam');
    return res.redirect('/resigiter')
    
} catch (error) {
    console.log(error);
    return false
}
}
const loginuser=(req, res)=>{
    return res.redirect('/dashboard')
}
const dashboardpage=(req, res)=>{
    return res.render('dashboard')
}

module.exports={
    login,resigiter,registeruser,loginuser,dashboardpage
}