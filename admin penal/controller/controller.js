const { render } = require('ejs')


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

const forgotpassword= async(req , res)=>{

    try {
        const email=req.body.Useremail

    
        const user = await usersmodels.findOne({email:email})
        
              if (!user) {
                    console.log("email is not vaild");
                    return res.redirect('/')
                }

                const otp =Math.floor(Math.random()*100000)

                var nodemailer = require('nodemailer');

                var transporter = nodemailer.createTransport({
                  service: 'gmail',
                  auth: {
                    user: 'voranikhil121@gmail.com',
                    pass: 'mlnx nhbt xvne uqef'
                  }
                });

                var mailOptions = {
                  from: 'voranikhil121@gmail.com',
                  to:email,
                  subject: 'Sending Email using Node.js',
                  html: ` hellow  hk brand ${otp}`
                };

                transporter.sendMail(mailOptions, function(error, info){
                  if (error) {
                    console.log(error);
                  } else {
                console.log('Email sent: ' + info.response);
                    let obj={
                        otp:otp,
                        email:email
                    }
                    res.cookie('otp', obj);
                    return res.redirect('/otp')
                  }
                });
} catch (error) {
    console.log(error);    
    return false  
}
}

const otppage=(req, res)=>{

    if (!req.cookies['otp']) {
        return res.redirect("/")
    }
    return res.render('otp')
}
const newpasspage=(req, res)=>{
    if (!req.cookies['otp']) {
        return res.redirect("/")
    }
    return res.render('newpass')
}

const otp=(req, res)=>{

    try {
        const otp=req.body.otp
        const userotp=req.cookies.otp.otp
    
        if (otp==userotp) {
            return res.redirect('/')
        }
        console.log("your otp is not vaild");
        return false
    } catch (error) {
        console.log(error);
        return false
    }
   
}

const newpass=async(req, res)=>{

    try {
        const {newpass,compass}=req.body
        if (newpass===compass) {
            let email=req.cookies.otp.email
        const user=await usersmodels.findOneAndUpdate({email:email},{
            password:newpass
        })
           return res.redirect('/') 
        }else{
            console.log("confirm password and new password not match");
            return res.redirect('/newpass')    
        }
    } catch (error) {
        console.log(error);
        
    }


}

module.exports={
    login,resigiter,registeruser,loginuser,dashboardpage,forgotpassword,otppage,otp,newpasspage,newpass
}