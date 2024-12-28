const usermodels=require('../models/authmodels')
const produactmodels=require('../models/produactmodels')
const loginpage=(req, res)=>{
    return res.render('login')
}
const respage=(req, res)=>{
    return res.render('regiter')
}

const inserstrecord=async(req,res)=>{
    try {
        const {name, password,email}=req.body;
        const users=await usermodels.create({
            name, password,email
        })
console.log(users);

return res.redirect('/')


} catch (error) {
    console.log(error);
    
}
}

const loginusers=async(req, res)=>{
    try {
   
        return res.redirect('dash')
        
    } catch (error) {
        console.log(error);
        
    }
}


const dashbordpage=async(req, res)=>{
    return res.render('dash')
}

const prodactadd=async(req, res)=>{
    const produact=produactmodels.find({})
    return res.render('addprodact',produact)
}

const addproduact=async(req, res)=>{
    try {
        
        const {pname,price,qty,desc} =req.body;
        const produact= await product.create({
            pname:pname,
            price:price,
            qty:qty,
            desc:desc,
            image:req.file.path
            
        })
        return res.redirect('prodactadd')

    } catch (error) {
        console.log(error);
        
    }

}


module.exports={
    loginpage,respage,inserstrecord,loginusers,dashbordpage,prodactadd,addproduact
}