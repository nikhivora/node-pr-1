
const usermodels=require('../models/usermodels')

const mailer=require('nodemailer')
const registerpage= (req, res)=>{
  return   res.render('res')
}
const loginpage= (req, res)=>{
  return  res.render('login')
}
const dashpage= (req, res)=>{
   return   res.render('dash')
}

const registerusers= async(req, res)=>{
    try {
        const { name, email, password, } = req.body;
        await usermodels.create({
            name: name,
            email: email,
            password: password
        })
        
        return res.redirect('/')
    } catch (err) {
        console.log(err);
        return false;
    }
    
}

const loginusers= (req, res)=>{
 return res.redirect('dash')
}
const emailverifition= (req, res)=>{
 return res.render('emailverifetion')
}


const email=async(req, rse)=>{
    try {
    let email = req.body.usersemail;
    const user= await usermodels.findOne({email:email})
    if (!user) {
        console.log("user is not found");
     return res.redirect('/')   
    }
    

    const otp=Math.floor(Math.random()*100000)

    var nodemailer = require('nodemailer');

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'youremail@gmail.com',
        pass: 'yourpassword'
      }
    });
    
    var mailOptions = {
      from: 'youremail@gmail.com',
      to: 'myfriend@yahoo.com',
      subject: 'Sending Email using Node.js',
      text: 'That was easy!'
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

} catch (error) {
    
}

}
const logout=(req, res)=>{
    req.logout((err)=>{
     if(err) {  console.log(err);
      return false
    }
    })

   return  res.redirect('/')
}
module.exports={
    registerpage,registerusers,loginpage,dashpage,loginusers,logout,emailverifition,email
}