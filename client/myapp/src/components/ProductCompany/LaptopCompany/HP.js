import Header from "../../Home/Header";
import {useCart} from "../../Cart/CartCreation"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const HP = () => {
  const {addToCart} = useCart() ;
  const navigate = useNavigate() ;
  const [filteredData,setFilteredData] = useState([]) ;
  const handleAddCart = (item) => {
    addToCart(item) ;
    navigate("/CartDisplay") ;
 }
    const data = [
        {
            _id: 41 ,
            productCategory: "Laptops",
            productCompany: "HP",
            productImageUrl: "https://rukminim1.flixcart.com/image/416/416/kbqu4cw0/computer/q/x/r/hp-original-imaftyzachgrav8f.jpeg?q=70",
            productDescription: "HP Pavilion Ryzen 5 Hexa Core AMD R5-5600H - (8 GB/512 GB SSD/Windows 10/4 GB Graphics/NVIDIA GeForce GTX 1650/144 Hz) 15-ec2004AX Gaming Laptop (15.6 inch, Shadow Black, 1.98 kg) 4.411,549 Ratings & 1,181 Reviews Extra ₹10000 off ₹49,990"
          },{
            _id: 42 ,  
            productCategory: "Laptops",
            productCompany: "HP",
            productImageUrl: "https://rukminim1.flixcart.com/image/416/416/l5h2xe80/computer/h/i/p/14s-dy5005tu-thin-and-light-laptop-hp-original-imagg4rc7n75zqkp.jpeg?q=70",
            productDescription: "HP 14s Intel Core i3 11th Gen - (8 GB/256 GB SSD/Windows 11 Home) 14s - dy2507TU Thin and Light Laptop (14 inch, Natural Silver, 1.41 Kg, With MS Office) 4.21,440 Ratings & 127 Reviews ₹35,990"
          },{
            _id: 43 ,
            productCategory: "Laptops",
            productCompany: "HP",
            productImageUrl: "https://rukminim1.flixcart.com/image/416/416/xif0q/computer/i/b/p/-original-imaghkprhrcgrfey.jpeg?q=70",
            productDescription: "HP Pavilion Intel Core i5 12th Gen - (8 GB/512 GB SSD/Windows 11 Home) 14-dv2053TU Thin and Light Laptop (14 Inch, Natural Silver, 1.41 kg, With MS Office) 4.2105 Ratings & 8 Reviews Extra ₹5509 off ₹61,490"
          },{
            _id:44,
            productCategory: "Laptops",
            productCompany: "HP",
            productImageUrl: "https://rukminim1.flixcart.com/image/416/416/xif0q/computer/5/6/i/-original-imaggshd5zgfe8ev.jpeg?q=70",
            productDescription: "HP Ryzen 5 Hexa Core 5500U - (16 GB/512 GB SSD/Windows 11 Home) 15s- eq2182AU Thin and Light Laptop (15.6 Inch, Natural Silver, 1.69 Kg, With MS Office) 4.3262 Ratings & 29 Reviews ₹49,123"
          },{
            _id:45 ,
            productCategory: "Laptops",
            productCompany: "HP",
            productImageUrl: "https://in-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c08182657_1_2.png",
            productDescription: "HP 15s Intel Core i5 12th Gen - (8 GB/512 GB SSD/Windows 11 Home) 15s-fq5111TU Thin and Light Laptop (15.6 inch, Natural Silver, 1.69 Kg, With MS Office) 4.21,830 Ratings & 152 Reviews Extra ₹3091 off ₹56,899"
          }  
    ]
    
    const handleSearchInputChange = (searchInput) => {
      if (searchInput === '' || searchInput === null) {
        setFilteredData(data);
      } else {
        const filtered = data.filter(
          (item) =>
            searchInput.toLowerCase().includes('hp') &&
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
      </div>
    )
}

export default HP ;