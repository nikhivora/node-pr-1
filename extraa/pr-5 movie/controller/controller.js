const { restart } = require('nodemon')
const usersmodel=require('../models/usersmodels')
const addpage=(req, res)=>{
    return res.render('add')
}
const viewpage= async (req, res)=>{

    try {
    
        const users= await usersmodel.find({})
       
        return res.render('views',{
           users
        })
       } catch (error) {

           console.log(error);
           return false
       }
}

const adddata=async(req, res)=>{
    try {

        const {name, desc,price} =req.body    
        console.log(req.body);
            
        await usersmodel.create({
            name:name,
            price:price,
            desc:desc,
            image:req.file.path
        })

        return res.redirect('/')


    } catch (err) {
        console.log(err);
        return false
    }
}


const deletedata= async (req, res)=>{
    try {
        

        const id=req.query.id
 
        await usersmodel.findByIdAndDelete(id)

        return res.redirect('views')
        

    } catch (error) {
        console.log(error);
        return false
    }
}


module.exports={
    addpage,
    viewpage,
    adddata,
    deletedata
}