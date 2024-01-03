const profileModel = require('./profileModels') ;
const registerModel = require('./registerModels') ;
const bcryptjs = require('bcryptjs') ;
const express = require('express') ;
const productDetailModel = require('./productDetailModel') ;
const jwt = require('jsonwebtoken');

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

const handlePostRegister = async(req,res) => {
    
    const {userName,userEmail,userPassword} = req.body ;
    if((!userName) || (!userEmail) || (!userPassword)) {
          return res.status(400).send({message:'Entering all field is mandatory',success:false}) ;
    }
    try {
         let regResponse = await registerModel.findOne({userEmail:req.body.userEmail}) ;
         if(regResponse) {
              return res.status(409).send({message:'User already exists',success:false}) ;
         }
         else {
              const salt = await bcryptjs.genSalt(10) ; 
              const password = req.body.userPassword ;
              const hashedPassword =  await bcryptjs.hash(password,salt) ;
              const newResponse = await new registerModel({userName,userEmail,userPassword:hashedPassword}) ;
              const savedUser = await newResponse.save({userName,userEmail,userPassword:hashedPassword}) ;  
              const userDetails = {
                  userName:savedUser.userName,
                  userEmail:savedUser.userEmail
              }
              console.log(userDetails) ; 
              return res.status(201).send({message:'Successfully done the registration',success:true,userDetails}) ;         
         }
    }
    catch(error){
            console.log(error) ;
            return res.status(500).send({message:'Could not process the request',success:false}) ;
    }
 
} 

const handlePostLogin = async(req,res) => 
{
    const {userEmail,userPassword} = req.body ;
    console.log(req.body) ;
    if((!userEmail) || (!userPassword)) {
         {
            return res.status(400).send({message:'Entering all fields is mandatory',success:false}) ; 
         }
    }
    try {
          let comparisonOutput ;
          let loginResponse = await registerModel.findOne({userEmail:req.body.userEmail}) ;
          if(!loginResponse) {
             return res.status(404).send({message:'Invalid email',success:false}) ;
          }
          else if(!loginResponse.userPassword){
             return res.status(405).send({message:'Invalid user',success:false}) ;  
          }
          const userDetails = {
               userEmail: loginResponse.userEmail
          }
          console.log(userDetails) ;
          comparisonOutput = await bcryptjs.compare(userPassword,loginResponse.userPassword) ;
          if(!comparisonOutput){
              return res.status(406).send({message:'Invalid credentials',success:false}) 
          }
          else {
            const token = jwt.sign({id:comparisonOutput._id},process.env.secret_key,{
                expiresIn:"1d"
            })
              return res.status(201).send({message:'Login successfull',success:true,token}) ;
          }
    }
    catch(error) {
         console.log(error) ;
         return res.status(500).send({message:'Unable to process the request',success:false}) ;
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