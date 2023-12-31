const mongoose = require('mongoose') ;
const colors = require('colors') ;
const dotenv = require('dotenv') ;

dotenv.config()
const Connect =  async () => 
{    
    try 
    {

        await mongoose.connect(process.env.mongodb_uri
        ) ;
        console.log(`Successfully connected to database`.bgGreen) ;
    } 
    catch(error)
    {
        console.log(`Unable to connect to database`.bgRed) ; 
    }
}

module.exports = Connect ;
