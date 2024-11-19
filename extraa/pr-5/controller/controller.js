const usermodels=require('../models/usersmodels')

const addpage=(req,res)=>{
return res.render('add')
}

const adddata= (req, res)=>{

  console.log(req.body);
    
}


module.exports={
    addpage,
    adddata
}

