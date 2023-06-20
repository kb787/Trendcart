var express = require('express') ;
var http = require('http') ;
var app = express() ;
var server = http.createServer(app) ;
var Connect = require("./configure") ;
const {profileRouter,registerRouter} = require('./controller') ;
var cors = require('cors') ;
var corsOptions = {
    origin:"https://localhost:3000" ,
   }

app.use(express.json()) ;
app.use(cors(corsOptions)) ;
Connect() ;
app.use("/v1/api/profiles",profileRouter) ;
app.use("/v2/api/users",registerRouter) ;

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