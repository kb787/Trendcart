import {Link} from 'react-router-dom'

const ElectronicsCollection = () => {
    const data = [
        {  
          _id :1 ,
          title:"Printer" ,
          imageUrl:"https://rukminim1.flixcart.com/image/200/200/printer/j/j/y/hp-laserjet-m1005-multifunction-original-imadxhzpeb9qbrfg.jpeg?q=70" ,
          buttonNavigation:"/Printer" ,      
        },
        {
          _id:2  ,
          title:"Earphone" ,
          imageUrl:"https://rukminim1.flixcart.com/image/416/416/xif0q/headphone/l/r/d/nb119c-carter-48-hours-playing-time-fast-charging-bluetooth-original-imagh7zhe2nmdmhx.jpeg?q=70" ,
          buttonNavigation:"/Earphone" , 
        } ,
        {
          _id:3 ,
          title:"Monitor",
          imageUrl:"https://rukminim1.flixcart.com/image/200/200/kynb6vk0/monitor/1/n/s/lf22t354fhwxxl-full-hd-22-lf22t354fhwxxl-samsung-original-imagats2rjbg9uhv.jpeg?q=70" ,
          buttonNavigation:"/Monitor",
        } ,
        {
          _id:4 ,
          title:"Projector" ,
          imageUrl:"https://rukminim1.flixcart.com/image/200/200/kx50gi80/projector/r/9/p/zeb-pixa-play-12-5-6-dobly-audio-led-projector-zebronics-original-imag9z3yujqmzqt4.jpeg?q=70",
          buttonNavigation:"/Projector",
      
        } ,
      /*  
        {
          _id:5 ,
          title:"Powerbanks" ,
          imageUrl:"https://rukminim1.flixcart.com/image/200/200/l1pc3gw0/power-bank/e/u/y/-original-imagd7dzan7sakt2.jpeg?q=70",
          buttonNavigation:"/Powerbank"
        }
      */  
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
                  className="contentImg"
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

export default ElectronicsCollection ;