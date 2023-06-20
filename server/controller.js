var profileModel = require('./profileModels') ;
var registerModel = require('./registerModels') ;
var express = require('express') ;

const handlePostProfile = async(req,res)  => 
{
    try 
    {
        const {firstName,lastName,email,age,city,country,state,address,contactNo} = req.body ;
        console.log(req.body) ;
        var newUserProfile = await new profileModel(
            {
                firstName,lastName,email,age,city,country,state,address,contactNo
            }
        )
        newUserProfile.save() ;
        console.log(newUserProfile) ;
        return res.status(201).send({message:"Successfully saved your profile", success:true,newUserProfile}) ;
    }
    catch(error)
    {
        console.log(error) ;
        return res.status(500).send({message:" Unable to save your profile ", success:false}) ;
    }
}

const handlePostRegister = async(req,res) => 
{
     try 
     {
        const {userName,userEmail,userPassword} = req.body ;
        console.log(req.body) ;
            var prevUser = await registerModel.findOne(
                {
                   userEmail:req.body.userEmail 
                }   
            )
            if(prevUser)
            {
                 return res.status(200).send({message:"Already a user exists", success:false}) ;
            }
            console.log(prevUser) ;
            var newUser = await new registerModel(
                {
                    userName,userEmail,userPassword
                }
            )
            newUser.save() ;
            console.log(newUser) ;
            return res.status(201).send({message:"Saved the user",success:true,newUser}) ;
     }
     catch(error)
     {
        console.log(error) ;
        return res.status(500).send({message:"Unable to register",success:false}) ;
     }
} 

const handlePostLogin = async(req,res) => 
{
    try 
    {
        const {userEmail,userPassword} = req.body ;
        console.log(req.body) ;
        var prevReq = await registerModel.findOne(
            {
                userEmail:req.body.userEmail 
            }
        )
        if(!prevReq)
        { 
           return res.status(202).send({message:"Invalid email address",success:false}) ; 
        }
        else if(prevReq.userPassword !== req.body.userPassword)
        {
            return res.status(202).send({message:"Invalid credentials", success:false}) ;
        }
        else 
        {
            return res.status(201).send({message:"Login Success",success:true}) ;
        }
    }
    catch(error)
    {
       console.log(error) ;
       return res.status(500).send({message:"Unable to login",success:false}) ;   
    }
}

var profileRouter = express.Router() ;
var registerRouter = express.Router() ;

profileRouter.post("/postProfile",handlePostProfile) ;

registerRouter.post("/postRegister",handlePostRegister) ;
registerRouter.post("/postLogin",handlePostLogin) ;

module.exports = {
    profileRouter,registerRouter
}