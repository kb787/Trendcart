import Header from "../../Home/Header";
import {useCart} from "../../Cart/CartCreation" 
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ApplePhone = () => {
  const navigate = useNavigate() ;
  const {addToCart} = useCart() ;
  const [filteredData,setFilteredData] = useState([]) ;
  const handleAddCart = (item) => {
    addToCart(item) ;
    navigate("/CartDisplay") ;
 }
    const data = [
        {
            _id: 60 ,
            productCategory: "Mobiles",
            productCompany: "Apple",
            productImageUrl: "https://m.media-amazon.com/images/I/31VjlrbE3bL._SY445_SX342_QL70_FMwebp_.jpg",
            productDescription: "Apple iPhone 14 (128 GB) - Blue Brand: Apple 4.5 4.5 out of 5 stars , 1,311 ratings | 178 answered questions Amazon's Choice for iphon 14 -16% ₹67,499₹67,499"
          },{
            _id: 61 ,  
            productCategory: "Mobiles",
            productCompany: "Apple",
            productImageUrl: "https://m.media-amazon.com/images/I/61VuVU94RnL._SX679_.jpg",
            productDescription: "Apple iPhone 13 (128GB) - Midnight Brand: Apple 4.6 4.6 out of 5 stars  ,  15,613 ratings | 857 answered questions Amazon's Choice for  -11% ₹61,999₹61,999"
          },{
            _id: 62 ,
            productCategory: "Mobiles",
            productCompany: "Apple",
            productImageUrl: "https://m.media-amazon.com/images/I/61cwywLZR-L._SX679_.jpg",
            productDescription: "Apple iPhone 14 (128 GB) - Midnight Brand: Apple 4.5 4.5 out of 5 stars ,1,311 ratings | 178 answered questions Amazon's Choice for apple i phone Deal -15% ₹67,999₹67,999"
          },{
            _id:63 ,
            productCategory: "Mobiles",
            productCompany: "Apple",
            productImageUrl: "https://m.media-amazon.com/images/I/31VjlrbE3bL._SY445_SX342_QL70_FMwebp_.jpg",
            productDescription: "Apple iPhone 14 (128 GB) - Blue Brand: Apple 4.5 4.5 out of 5 stars , 1,311 ratings | 178 answered questions Amazon's Choice for iphon 14 -16% ₹67,499₹67,499"
          }  
    ]

    
    const handleSearchInputChange = (searchInput) => {
      if (searchInput === '' || searchInput === null) {
        setFilteredData(data);
      } else {
        const filtered = data.filter(
          (item) =>
            searchInput.toLowerCase().includes('apple') &&
            searchInput.toLowerCase().includes(item.productDescription) 
        );
        setFilteredData(filtered);
      }
    };

    return (
      <div className = "LenovoPage">
      <Header onSearchInputChange={handleSearchInputChange}/>
      <div className = "Lenovo"> 
        <ul className = "contentCardsProduct">  
        { 
         (filteredData?.map((item) =>  
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

export default ApplePhone ;