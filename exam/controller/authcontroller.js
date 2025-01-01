const usermodels=require('../models/authmodels')
const produactmodels=require('../models/produactmodels')
const cart=require('../models/cartmodels')

const fs=require('fs')
const produact = require('../models/produactmodels')
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
        
        return res.redirect('prodactadd')
        
    } catch (error) {
        console.log(error);
        
    }
}


const dashbordpage=async(req, res)=>{
    const produact= await produactmodels.find({})
    return res.render('dash',{
        produact
    })
}

const prodactadd=async(req, res)=>{
    
    return res.render('addprodact')
}

const addproduact=async(req, res)=>{
    try {
        
        const {pname,price,qty,desc} =req.body;
        const produact= await produactmodels.create({
            pname:pname,
            price:price,
            qty:qty,
            desc:desc,
            image:req.file.path
            
        })
        console.log(produact);
        
        return res.redirect('prodactadd')
        
    } catch (error) {
        console.log(error);
        
    }
    
}


const deleteproduct=async(req, res)=>{
    const id=req.query.id;
    
    await produactmodels.findByIdAndDelete(id);
    return res.redirect('/dash')
    
}

const editproduct=async(req, res)=>{
    const id=req.query.id;
    
    let single = await produactmodels.findById(id);
    
    return res.render('editproduct',{
        single
    })
    
}

const updatepro=async(req, res)=>{
    try {
        const {editid,pname,price,qty,desc} = req.body;
        console.log(req.body);
        
        
        if (req.file) {
            const single = await produactmodels.findById(editid)
            fs.unlinkSync(single.image)
            await produactmodels.findByIdAndUpdate(editid,{
                pname:pname,
                price:price,
                qty:qty,
                desc:desc,
                image:req.file.path
            })
            
            return res.redirect('dash')
        } else {
            const single = await produactmodels.findById(editid)
            
            await produactmodels.findByIdAndUpdate(editid,{
                pname:pname,
                price:price,
                qty:qty,
                desc:desc,
                image:single.path
            })
            return res.redirect('dash')
        }
        
    } catch (error) {
        console.log(error);
        
    }
}



const AddtoCrat = async (req, res) =>{
    try {
        const id =req.query.id;
        const produactmodel = await produactmodels.findById(id);
        
        log=await cart.create({
            pname:produactmodel.pname,
            price:produactmodel.price,
            qty:produactmodel.qty,
            desc:produactmodel.desc,
            image:produactmodel.image

         });

      
         
         return res.redirect('/dash');     
    } catch (err) {
        console.log(err);
        return false;
    }
}
const viewtocart =async (req, res) =>{
    try {
           const Crat = await cart.find({});
                
                 return res.render('addtocart',{Crat});
    } catch (err) {
        console.log(err);
        return false;
    }
}
const deletecart =  async (req, res) =>{
    try {
        const id =req.query.id;
       
        
        const Productaddtocrat = await cart.findByIdAndDelete(id);
    console.log(Productaddtocrat);
    
       
         return res.redirect('/viewtocart');     
    } catch (err) {
        console.log(err);
        return false;
    }
}
module.exports={
    deletecart, loginpage,respage,inserstrecord,loginusers,dashbordpage,prodactadd,addproduact,deleteproduct,editproduct,updatepro,viewtocart,AddtoCrat
}