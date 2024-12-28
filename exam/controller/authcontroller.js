const usermodels=require('../models/authmodels')
const produactmodels=require('../models/produactmodels')

const fs=require('fs')
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
        
        if (req.file) {
            const single = await productmodels.findById(editid)
            fs.unlinkSync(single.image)
            await productmodels.findByIdAndUpdate(editid,{
                pname:pname,
                price:price,
                qty:qty,
                desc:desc,
                image:req.file.path
            })
            
            return res.redirect('/product/productpage')
        } else {
            const single = await productmodels.findById(editid)
    
            await productmodels.findByIdAndUpdate(editid,{
                categoryid : category,
                subcategoryid : subcategory,
                exsubcategoryid : exsubcategory,
                product : product,
                desc : desc,
                price : price,
                image : single.image
            })
            return res.redirect('/product/productpage')
        }
    
    } catch (error) {
        console.log(error);
        
    }
}

module.exports={
    loginpage,respage,inserstrecord,loginusers,dashbordpage,prodactadd,addproduact,deleteproduct,editproduct,updatepro
}