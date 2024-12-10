const categorymodels=require('../models/categorymodels')

const AddCategorypage=(req, res)=>{
return res.render('category/add')
}

const addCategory=async(req, res)=>{
    try {
        const {category}=req.body
        
        await categorymodels.create({
            category:category
        })
        return res.redirect('/category/')
    } catch (error) {
        console.log(error);
        return false
    }
}
    const ViewCategorypage=async(req, res)=>{

        try {
            const category=await categorymodels.find({})
            
            return res.render('category/view',{
                category
            })
        } catch (error) {
            console.log(error);
            return false
        }
    }

module.exports={
    AddCategorypage,addCategory,ViewCategorypage
}