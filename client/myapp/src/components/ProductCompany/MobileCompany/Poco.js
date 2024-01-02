import Header from "../../Home/Header";
import {useCart} from "../../Cart/CartCreation"
import { useNavigate } from "react-router-dom";

const Poco = () => {
  const {addToCart} = useCart() ;
  const navigate = useNavigate() ;
  const handleAddCart = (item) => {
    addToCart(item) ;
    navigate("/CartDisplay") ;

 }
    const data = [
        {
            _id: 70 ,
            productCategory: "Mobiles",
            productCompany: "Poco",
            productImageUrl: "https://rukminim1.flixcart.com/image/416/416/l0igvww0/mobile/j/d/g/-original-imagcafg6hbeeqwf.jpeg?q=70",
            productDescription: "POCO M4 Pro 5G (Cool Blue, 64 GB) (4 GB RAM)#JustHere 4.334,990 Ratings & 3,113 Reviews Extra ₹5000 off ₹11,999"
          },{
            _id: 71 ,  
            productCategory: "Mobiles",
            productCompany: "Poco",
            productImageUrl: "https://rukminim1.flixcart.com/image/416/416/l0fm07k0/mobile/8/9/n/-original-imagc7tmhcbrarpk.jpeg?q=70",
            productDescription: "POCO M4 Pro (Cool Blue, 128 GB) (6 GB RAM)#JustHere 4.31,33,599 Ratings & 12,193 Reviews Extra ₹8000 off ₹11,999"
          },{
            _id: 72 ,
            productCategory: "Mobiles",
            productCompany: "Poco",
            productImageUrl: "https://rukminim1.flixcart.com/image/416/416/l0igvww0/mobile/j/d/g/-original-imagcafg6hbeeqwf.jpeg?q=70",
            productDescription: "POCO M4 Pro 5G (Cool Blue, 128 GB) (6 GB RAM)#JustHere 4.242,950 Ratings & 3,827 Reviews Extra ₹6000 off ₹13,999"
          }
    ]

    return (
      <div className = "LenovoPage">
      <Header/>
      <div className = "Lenovo"> 
        <ul className = "contentCardsProduct">  
        { 
         (data?.map((item) =>  
             <div  key = {item._id}>     
             <div className = "contentCardProductMobile">   
                      <li>
                      <img
                       src = {item.productImageUrl} 
                      className="contentImgProductMobile"
                      alt="..."
                      /> 
                    <div className="contentBody">
                       <h5 className="contentTit">Category :- {item.productCategory}</h5>
                    </div> 
                    <div className="contentBody">
                       <h5 className="contentTit">Company :- {item.productCompany}</h5>
                    </div>
                    <div className="contentBody">
                       <h5 className="contentTitProductMobile">{item.productDescription}</h5>
                    </div>
                    <div>
                    {/*  <Link to={item.buttonNavigation}> */}
                           <button className="contentButtonProduct" onClick = {() => handleAddCart(item)}>Add to Cart</button>
                    {/*  </Link> */}
                    </div>
                      </li>        
             </div>
         </div>    
             )
    
         )  
        } 
       
      </ul>
      </div>  
      </div>
    )
}

export default Poco ;