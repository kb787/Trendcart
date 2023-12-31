const profileModel = require('./profileModels') ;
const registerModel = require('./registerModels') ;
const express = require('express') ;
const productDetailModel = require('./productDetailModel') ;

const handlePostProfile = async(req,res)  => 
{
    try 
    {
        const {firstName,lastName,email,age,city,country,state,address,contactNo} = req.body ;
        console.log(req.body) ;
        let newUserProfile = await new profileModel(
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
            let prevUser = await registerModel.findOne(
                {
                   userEmail:req.body.userEmail 
                }   
            )
            if(prevUser)
            {
                 return res.status(200).send({message:"Already a user exists", success:false}) ;
            }
            console.log(prevUser) ;
            let newUser = await new registerModel(
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
        let prevReq = await registerModel.findOne(
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

const getAllMobileItems = async(req,res) => {
    const {productCategory,productCompany,productImageUrl,productDescription} = req.body ;
    const expectedCategory = 'mobiles' ;
    console.log(req.body) ;
    try {
        let fetchResponse = await productDetailModel.find({
              productCategory : expectedCategory
        })
        if(!fetchResponse){
            return res.status(404).send({message:'No product found'}) ;
        }
        else {
             console.log(fetchResponse) ; 
             return res.send(fetchResponse) ;
        } 
    }
    catch(error){
          return res.status(500).send({message:'Unable to perform your request'}) ;
    } 
}

const getAllLaptopItems = async(req,res) => {
    const {productCategory,productCompany,productImageUrl,productDescription} = req.body ;
    const expectedCategory = 'laptops' ;
    console.log(req.body) ;
    try {
        let fetchResponse = await productDetailModel.find({
              productCategory : expectedCategory
        })
        if(!fetchResponse){
            return res.status(404).send({message:'No product found'}) ;
        }
        else {
             console.log(fetchResponse) ; 
             return res.send(fetchResponse) ;
        } 
    }
    catch(error){
          return res.status(500).send({message:'Unable to perform your request'}) ;
    } 
}

const getAllMonitorItems = async(req,res) => {
    const {productCategory,productCompany,productImageUrl,productDescription} = req.body ;
    const expectedCategory = 'monitors' ;
    console.log(req.body) ;
    try {
        let fetchResponse = await productDetailModel.find({
              productCategory : expectedCategory
        })
        if(!fetchResponse){
            return res.status(404).send({message:'No product found'}) ;
        }
        else {
             console.log(fetchResponse) ; 
             return res.send(fetchResponse) ;
        } 
    }
    catch(error){
          return res.status(500).send({message:'Unable to perform your request'}) ;
    } 
}

const getAllEarphoneItems = async(req,res) => {
    const {productCategory,productCompany,productImageUrl,productDescription} = req.body ;
    const expectedCategory = 'earphones' ;
    console.log(req.body) ;
    try {
        let fetchResponse = await productDetailModel.find({
              productCategory : expectedCategory
        })
        if(!fetchResponse){
            return res.status(404).send({message:'No product found'}) ;
        }
        else {
             console.log(fetchResponse) ; 
             return res.send(fetchResponse) ;
        } 
    }
    catch(error){
          return res.status(500).send({message:'Unable to perform your request'}) ;
    } 
}

const getAllPrintersItems = async(req,res) => {
    const {productCategory,productCompany,productImageUrl,productDescription} = req.body ;
    const expectedCategory = 'printers' ;
    console.log(req.body) ;
    try {
        let fetchResponse = await productDetailModel.find({
              productCategory : expectedCategory
        })
        if(!fetchResponse){
            return res.status(404).send({message:'No product found'}) ;
        }
        else {
             console.log(fetchResponse) ; 
             return res.send(fetchResponse) ;
        } 
    }
    catch(error){
          return res.status(500).send({message:'Unable to perform your request'}) ;
    } 
}

const getAllProjectorItems = async(req,res) => {
    const {productCategory,productCompany,productImageUrl,productDescription} = req.body ;
    const expectedCategory = 'projectors' ;
    console.log(req.body) ;
    try {
        let fetchResponse = await productDetailModel.find({
              productCategory : expectedCategory
        })
        if(!fetchResponse){
            return res.status(404).send({message:'No product found'}) ;
        }
        else {
             console.log(fetchResponse) ; 
             return res.send(fetchResponse) ;
        } 
    }
    catch(error){
          return res.status(500).send({message:'Unable to perform your request'}) ;
    } 
}





let profileRouter = express.Router() ;
let registerRouter = express.Router() ;
let productMobileRouter = express.Router() ;
let productLaptopRouter = express.Router() ;
let productMonitorRouter = express.Router() ;
let productEarphoneRouter = express.Router() ;
let productProjectorRouter = express.Router() ;
let productPrinterRouter = express.Router() ;


profileRouter.post("/postProfile",handlePostProfile) ;

registerRouter.post("/postRegister",handlePostRegister) ;
registerRouter.post("/postLogin",handlePostLogin) ;

productMobileRouter.get("/getMobileItems",getAllMobileItems) ;
productLaptopRouter.get("/getLaptopItems",getAllLaptopItems) ;
productMonitorRouter.get("/getMonitorItems",getAllMonitorItems) ;
productProjectorRouter.get("/getProjectorItems",getAllProjectorItems) ;
productEarphoneRouter.get("/getEarphoneItems",getAllEarphoneItems) ;
productPrinterRouter.get("/getPrinterItems",getAllPrintersItems) ;

module.exports = {
  profileRouter:profileRouter,  
  registerRouter:registerRouter , 
  productMobileRouter:productMobileRouter ,
  productMonitorRouter:productMonitorRouter ,
  productLaptopRouter:productLaptopRouter,
  productProjectorRouter:productProjectorRouter,
  productEarphoneRouter:productEarphoneRouter ,
  productPrinterRouter:productPrinterRouter
}