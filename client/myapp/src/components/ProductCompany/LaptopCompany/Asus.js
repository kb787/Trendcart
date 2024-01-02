import Header from "../../Home/Header";
import {useCart} from "../../Cart/CartCreation" ;
import { useNavigate } from "react-router-dom";
const Asus = () => {
  const navigate = useNavigate() ;
  const {addToCart} = useCart() ;
  const handleAddCart = (item) => {
    addToCart(item) ;
    navigate("/CartDisplay") ;
 }
    const data = [
        {
            _id: 21 ,
            productCategory: "Laptops",
            productCompany: "Asus",
            productImageUrl: "https://rukminim1.flixcart.com/image/416/416/l3rmzrk0/computer/z/2/c/-original-imagetjyhhtrtkdg.jpeg?q=70",
            productDescription: "ASUS TUF Gaming A17 with 90Whr Battery Ryzen 5 Hexa Core AMD R5-4600H - (8 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/NVIDIA GeForce GTX 1650/144 Hz) FA706IHRB-HX041W Gaming Laptop (17.3 Inch, Graphite Black, 2.60 Kg) ₹49,990"
          },{
            _id: 22 ,  
            productCategory: "Laptops",
            productCompany: "Asus",
            productImageUrl: "https://rukminim1.flixcart.com/image/416/416/l3rmzrk0/computer/s/z/r/-original-imagetgzg4pgszmt.jpeg?q=70",
            productDescription: "ASUS TUF Gaming F15 Core i5 10th Gen - (8 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/NVIDIA GeForce GTX 1650/144 Hz) FX506LHB-HN358W Gaming Laptop (15.6 inch, Black Plastic, 2.30 kg kg) 4.44,299 Ratings & 415 Reviews Extra ₹9000 off ₹49,990"
          },{
            _id: 23 ,
            productCategory: "Laptops",
            productCompany: "Asus",
            productImageUrl: "https://rukminim1.flixcart.com/image/416/416/xif0q/computer/m/q/o/-original-imag7wjdg4dvcdya.jpeg?q=70",
            productDescription: "ASUS Core i7 11th Gen - (16 GB/512 GB SSD/Windows 11 Home) X515EA-EJ701WS Thin and Light Laptop (15.6 inch, Slate Grey, 1.80 Kg, With MS Office) 4.133 Ratings & 1 Reviews ₹54,990"
          },{
            _id:24 ,
            productCategory: "Laptops",
            productCompany: "Asus",
            productImageUrl: "https://rukminim1.flixcart.com/image/416/416/kp2y2kw0/computer/y/0/c/na-thin-and-light-laptop-asus-original-imag3ebnzawky4kn.jpeg?q=70",
            productDescription: "ASUS VivoBook 15 (2022) Core i3 10th Gen - (8 GB/512 GB SSD/Windows 11 Home) X515JA-EJ362WS | X515JA-EJ392WS Thin and Light Laptop (15.6 inch, Transparent Silver, 1.80 kg, With MS Office) 4.39,638 Ratings & 962 Reviews Extra ₹2000 off ₹33,990"
          },
          {
            _id:25 ,
            productCategory: "Laptops",
            productCompany: "Asus",
            productImageUrl: "https://rukminim1.flixcart.com/image/416/416/l13whow0/computer/o/s/h/-original-imagcqvpmys2cmg3.jpeg?q=70",
            productDescription: "ASUS VivoBook K15 OLED Ryzen 7 Octa Core AMD R7-5700U - (16 GB/512 GB SSD/Windows 11 Home) KM513UA-L713WS Thin and Light Laptop (15.6 Inch, Transparent Silver, 1.80 Kg, With MS Office) 4.3937 Ratings & 113 Reviews Extra ₹11000 off ₹55,990"
          } ,
          {
            _id:26 ,
            productCategory: "Laptops",
            productCompany: "Asus",
            productImageUrl: "https://rukminim1.flixcart.com/image/416/416/xif0q/computer/p/z/c/-original-imaghr25cncfgpza.jpeg?q=70",
            productDescription: "ASUS Vivobook Pro 15 Ryzen 7 Octa Core AMD R7-4800H - (16 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/NVIDIA GeForce GTX 1650 Max Q) M6500IH-HN701WS Creator Laptop (15.6 Inch, Quiet Blue, 1.80 kg, With MS Office) 4.5681 Ratings & 87 Reviews Extra ₹8000 off ₹58,990"
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

export default Asus ;