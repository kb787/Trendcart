var express = require('express') ;
var http = require('http') ;
var app = express() ;
var server = http.createServer(app) ;
var Connect = require("./configure") ;
const {profileRouter,registerRouter,productMobileRouter,productLaptopRouter,productMonitorRouter,productEarphoneRouter,productPrinterRouter,productProjectorRouter} = require('./controller') ;
var cors = require('cors') ;
var corsOptions = {
    origin:"https://localhost:3000" ,
   }

app.use(express.json()) ;
app.use(cors(corsOptions)) ;
Connect() ;
app.use("/v1/api/profiles",profileRouter) ;
app.use("/v2/api/users",registerRouter) ;
app.use("/v3/api",productMobileRouter) ;
app.use("/v4/api",productLaptopRouter) ;
app.use("/v5/api",productMonitorRouter) ;
app.use("/v6/api",productEarphoneRouter) ;
app.use("/v7/api",productPrinterRouter) ;
app.use("/v8/api",productProjectorRouter) ;

app.get("/" , (req,res) => 
{
    res.send(" Your NodeJs application has started ") ;
}
)


server.listen(3500, () =>
{
    console.log(" App launched ") ;
}
)