import {Link} from 'react-router-dom'

const LaptopCollection = () => {
    const data = [
        {  
          _id :100 ,
          title:"Lenovo" ,
          imageUrl:"https://rukminim1.flixcart.com/image/312/312/keaaavk0/computer/x/m/y/lenovo-na-laptop-original-imafuzt8r5jqppfn.jpeg?q=70" ,
          buttonNavigation:"/Lenovo" ,      
        },
        {
          _id:101 ,
          title:"Asus" ,
          imageUrl:"https://rukminim1.flixcart.com/image/312/312/kp2y2kw0/computer/y/0/c/na-thin-and-light-laptop-asus-original-imag3ebnzawky4kn.jpeg?q=70" ,
          buttonNavigation:"/Asus" , 
        } ,
        {
          _id:102 ,
          title:"Apple",
          imageUrl:"https://rukminim1.flixcart.com/image/312/312/kp5sya80/screen-guard/tempered-glass/o/v/n/apple-macbook-air-m1-13-3-inch-lightwings-original-imag3gh5xftgbpg3.jpeg?q=70" ,
          buttonNavigation:"/AppleMac",
        } ,
        {
          _id:103,
          title:"HP" ,
          imageUrl:"https://rukminim1.flixcart.com/image/312/312/kbqu4cw0/computer/q/x/r/hp-original-imaftyzachgrav8f.jpeg?q=70",
          buttonNavigation:"/HP",
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

export default LaptopCollection;