const usermodels=require('../models/usermodels')

const resiterpage =(req, res)=>{
    return res.render('resiter')

}
const loginpage =(req, res)=>{
    return res.render('login')
}
const dashbord =(req, res)=>{
    return res.render('dash')
}
const Resiterusers= async(req, res)=>{
try {
    const{name,email,password}= req.body;

    console.log(req.body);
    

    await usermodels.create({
        name:name,email:email,password:password
      })
      return res.redirect('/')

} catch (error) {
    console.log(err);
    return false
}

}

const loginuseres= async (req,res)=>{

    try {
     const {email,password}= req.body;
    //  console.log(req.body);
     

    //  const user = await usermodels.findOne({email:email})
     const users = await usermodels.findOne({password:password})
     
     console.log(users);

    //  console.log(user.password);
     
     

//      if (!user ||user.password !== password) {
         
//         console.log(`Email and Password not valid`);
//         return res.redirect('/')
//      }
        
// return res.redirect('/dash')
    } catch (error) {
        console.log(error);
        return false
        
    }
}

module.exports={
    resiterpage,
    loginpage,
    Resiterusers,
    loginuseres,
    dashbord
    
}