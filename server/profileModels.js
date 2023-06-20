var mongoose = require('mongoose') ;

var profileSchema = mongoose.Schema(
{    
    firstName :
    {
       type:String ,
       required:true 
    } ,
    lastName :
    {
        type:String ,
        required:true 
    } ,
    email :
    {
        type:String ,
        required:true 
    } ,
    age :
    {
        type:Number ,
        required:true
    } ,
    city : 
    {
       type:String ,
       required:true  
    } ,
    country :
    {
       type:String ,
       required:true  
    } ,
    state :
    {
        type:String ,
        required:true 
    } ,
    address :
    {
       type:String ,
       required:true  
    } ,
    contactNo :
    {
        type:String ,
        required:true 
    }
}    
)

if(mongoose.models['profiles'])
{
    return mongoose.model(profiles) ;
}

var profileModel = mongoose.model('profiles',profileSchema) ;
module.exports = profileModel ;