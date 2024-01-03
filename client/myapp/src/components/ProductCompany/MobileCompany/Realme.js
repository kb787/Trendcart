import Header from "../../Home/Header";
import {useCart} from "../../Cart/CartCreation"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Realme = () => {
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
            productCompany: "Realme",
            productImageUrl: "https://rukminim1.flixcart.com/image/312/312/l4ln8nk0/mobile/f/6/a/-original-imagfggrbywzk8r6.jpeg?q=70",
            productDescription: "realme C30 (Denim Black, 32 GB) (2 GB RAM) 4.369,343 Ratings & 3,637 Reviews Extra ₹2750 off ₹5,749"
          },{
            _id: 61 ,  
            productCategory: "Mobiles",
            productCompany: "Realme",
            productImageUrl: "https://rukminim1.flixcart.com/image/312/312/l4ln8nk0/mobile/p/h/p/-original-imagfggryyzyvhgw.jpeg?q=70",
            productDescription: "realme C30 (Bamboo Green, 32 GB) (3 GB RAM) 4.133,756 Ratings & 2,218 Reviews Extra ₹2550 off ₹6,749"
          },{
            _id: 62 ,
            productCategory: "Mobiles",
            productCompany: "Realme",
            productImageUrl: "https://rukminim1.flixcart.com/image/416/416/ksnjp8w0/mobile/k/o/m/c21y-rmx3261-realme-original-imag65kcytrk8dtr.jpeg?q=70",
            productDescription: "realme C21Y (Cross Blue, 64 GB) (4 GB RAM) 4.52,53,755 Ratings & 9,534 Reviews Extra ₹500 off ₹10,499"
          },{
            _id:63 ,
            productCategory: "Mobiles",
            productCompany: "Realme",
            productImageUrl: "https://rukminim1.flixcart.com/image/416/416/l1dwknk0/mobile/p/r/0/-original-imagcyj2prahc4pk.jpeg?q=70",
            productDescription: "realme C31 (Dark Green, 32 GB) (3 GB RAM) 4.545,377 Ratings & 1,798 Reviews Extra ₹2700 off ₹8,299"
          }  
    ]

    const handleSearchInputChange = (searchInput) => {
      if (searchInput === '' || searchInput === null) {
        setFilteredData(data);
      } else {
        const filtered = data.filter(
          (item) =>
            searchInput.toLowerCase().includes('realme') &&
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

export default Realme ;