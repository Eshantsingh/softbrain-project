const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

require('../db/conn');
const User = require('../model/userSchema');





router.get('/',(req,res)=> {
    res.send(`hello home from the server from router`);
});


//Asunc Await advance java Script
router.post('/catch',async (req,res)=>{
    const {name, email, phone, text }= req.body;

   if(!name ||  !email || !phone || !text){
    return res.status(422).json({error: "please fill the field"});
   }

   try {
    const userExist = await User.findOne({email:email});

    if (userExist){
        return res.status(422).json({error:"Email already Exist"});

    //}else if (password != cpassword){//
      //return res.status(422).json({error: "passwor are not matching"});//
   
}else { 

    const user = new User({name,  email, phone,text });
    //passwaor hasing in userSchema

    await user.save();

    res.status(201).json({message: "message send succfully "});
    
   }
   
  }catch (err){
    console.log(err);
   }

   });

// logine route logine code //
//router.post('/sign',async (req,res) => {//
 // try {//
   // let token;//
    //const{email,password}=req.body;//

   // if(!email || !password){//
    //  return res.status(400).json({error:"plz fill data"});//
  //  }//

    //const userLogin = await User.findOne ({ email: email});//
    
    //console.log(userLogin);   bcrypt method use for compare data is same  //
   // if(userLogin){//
   //const isMatch = await bcrypt.compare(password,userLogin.password);//
  
   // jwt token for provide uniqe id to user
   //const token = await userLogin.generateAuthToken();//
   //console.log(token);//
// store jwt in cookie //
   //res.cookie("jwtoken", token,{//
    //expires:new Date (Date.now()+25892000000),//
    //httpOnlu:true//
   //});//

  // if(!isMatch){

 //   res.status(400).json({error:"Invalid Credirntials password Pass"});//
   
 // }else{
  //  res.json({message:"user signin successfuly"});//
 //  }//
 
 // }else{//
  //  res.status(400).json({error:"Invalid Credirntials email "});//
   //}//

 // }catch (err){//
  //  console.log(err);//
  //}//
//});//

   //with promisses 
  // User.findOne({email:email})
    //   .then((userExist) => {
      //  if(userExist) {
        //    return res.status(422).json({error:"Email already Exist"});
       //}
       //const user = new User({name, text, email, phone});

       //user.save().then(()=>{
       // res.status(201).json({message:"user registered succesfuly"});
       //}).catch ((err)=>res.status(500).json({error:"faild to register"}));

       //}).catch(err=> {console.log(err);});
//});

module.exports =router;