import Header from "./HeaderNav";
import Content from "./Content";
import {data} from './CardDetails'
import { useState } from "react";
import {useCart} from "../Cart/CartCreation" ;
import { useNavigate } from "react-router-dom";
const Homepage = () => 
{  
   const [filteredData,setFilteredData] = useState([]) ;
   const {addToCart} = useCart() ;
   const navigation = useNavigate();
   const handleSearchInputChange = (searchInput) => {
      if(searchInput === '' ||  searchInput === null)
      {
         setFilteredData(data) ;
      }
      const filtered = data.filter(
        (item) =>
          ((item.productCategory.toLowerCase().includes(searchInput.toLowerCase())) &&
          (item.productCompany.toLowerCase().includes(searchInput.toLowerCase()))) || 
          (item.productDescription.toLowerCase().includes(searchInput.toLowerCase()))
      );
      setFilteredData(filtered); 
     }
     const handleAddCart = (item) => {
      addToCart(item) ;
      navigation("/CartDisplay") ;
   }
  
   return ( 
    <div className = "Homepage">
       <Header onSearchInputChange={handleSearchInputChange} />
       <Content/>
       <ul className = "contentCardsProduct">  
        { 
         (filteredData?.map((item) =>  
             <div  key = {item._id}>     
             <div className = "contentCardProduct">   
                      <li>
                      <img
                       src = {item.productImageUrl} 
                      className="contentImgProduct"
                      alt="..."
                      /> 
                    <div className="contentBody">
                       <h5 className="contentTit">Category :- {item.productCategory}</h5>
                    </div> 
                    <div className="contentBody">
                       <h5 className="contentTit">Company :- {item.productCompany}</h5>
                    </div>
                    <div className="contentBody">
                       <h5 className="contentTitProduct">{item.productDescription}</h5>
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
   ) 
}

export default Homepage ;