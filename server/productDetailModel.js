const mongoose = require('mongoose') ;

const productDetailSchema = mongoose.Schema(
    {
        productCategory : {
            type:String  
        } ,
        productCompany : {
            type:String 
        } ,
        productImageUrl : {
            type:String 
        },
        productDescription : {
            type:String 
        }
    }
)

let productDetailModel ;

if(mongoose.models.productdetails){
    return mongoose.model('productdetails') ;
}

productDetailModel = mongoose.model('productdetails',productDetailSchema) ;
module.exports = productDetailModel ;