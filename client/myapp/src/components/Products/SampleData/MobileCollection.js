import {Link} from 'react-router-dom'


const MobileCollection = () => {
    const data = [
        {  
          _id :10 ,
          title:"Realme" ,
          imageUrl:"https://rukminim1.flixcart.com/image/416/416/knrsjgw0/mobile/s/b/z/8-pro-rmx3081-realme-original-imag2dcabdfyjrtb.jpeg?q=70" ,
          buttonNavigation:"/Realme" ,      
        },
        {
          _id:11  ,
          title:"Poco" ,
          imageUrl:"https://rukminim1.flixcart.com/image/416/416/kfbfr0w0/mobile/f/x/r/poco-x3-mzb07z2in-original-imafvt3hz54npsba.jpeg?q=70" ,
          buttonNavigation:"/Poco" , 
        } ,
      /*  
        {
          _id:12 ,
          title:"Redmi",
          imageUrl:"https://rukminim1.flixcart.com/image/416/416/kj0bp8w0-0/mobile/d/e/1/9-power-mobhqab1-redmi-original-imafyz93hghvjkmu.jpeg?q=70" ,
          buttonNavigation:"/Redmi",
        } ,
      */  
        {
          _id:13 ,
          title:"Apple" ,
          imageUrl:"https://rukminim1.flixcart.com/image/416/416/kg8avm80/mobile/j/f/9/apple-iphone-12-dummyapplefsn-original-imafwg8dkyh2zgrh.jpeg?q=70",
          buttonNavigation:"/ApplePhone",
      
        } ,
   
        {
          _id:14 ,
          title:"Oppo" ,
          imageUrl:"https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/u/r/k/-original-imagge6uzzhkz4bh.jpeg?q=70",
          buttonNavigation:"/Oppo"
        } 
      ] 
   return ( 
    <ul className = "contentCards">  
    { 
     (data?.map((item) =>  
         <div  key = {item._id}>     
         <div className = "contentCard">   
                  <li>
                  <img
                   src = {item.imageUrl} 
                  className="contentMobImg"
                  alt="..."
                  /> 
                <div className="contentBody">
                   <h5 className="contentTit">{item.title}</h5>
                </div> 
                <div>
                  <Link to={item.buttonNavigation}>
                       <button className="contentButton">Visit Store</button>
                  </Link>
                </div>
                  </li>        
         </div>
     </div>    
         )

     )  
    }  
  </ul>
   ) 
}

export default MobileCollection ;