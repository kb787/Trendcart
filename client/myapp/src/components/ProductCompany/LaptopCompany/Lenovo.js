import Header from "../../Home/Header";

const Lenovo = () => {
    const data = [
        {
            _id: 200 ,
            productCategory: "Laptops",
            productCompany: "Lenovo",
            productImageUrl: "https://rukminim1.flixcart.com/image/416/416/kruyw7k0/computer/f/i/u/na-thin-and-light-laptop-lenovo-original-imag5jy6fsm2yx4q.jpeg?q=70",
            productDescription: "Lenovo IdeaPad 3 Core i3 11th Gen - (8 GB/512 GB SSD/Windows 11 Home) 82H801L7IN | 82H802FJIN | 82H802L3IN | 82H801LHIN Thin and Light Laptop (15.6 inch, Arctic Grey, 1.65 kg, With MS Office) 4.24,338 Ratings & 417 Reviews ₹39,490"
          },{
            _id: 201 ,  
            productCategory: "Laptops",
            productCompany: "Lenovo",
            productImageUrl: "https://rukminim1.flixcart.com/image/416/416/xif0q/computer/2/3/5/-original-imagg5hhjunrv4e4.jpeg?q=70",
            productDescription: "Lenovo IdeaPad 3 Ryzen 5 Hexa Core 5500U - (8 GB/512 GB SSD/Windows 11 Home) 15ALC6 Thin and Light Laptop (15.6 inch, Arctic Grey, 1.65 kg, With MS Office) 4.31,503 Ratings & 173 Reviews ₹46,490"
          },{
            _id: 202 ,
            productCategory: "Laptops",
            productCompany: "Lenovo",
            productImageUrl: "https://rukminim1.flixcart.com/image/416/416/keaaavk0/computer/x/m/y/lenovo-na-laptop-original-imafuzt8r5jqppfn.jpeg?q=70",
            productDescription: "Lenovo Intel Celeron Dual Core - (8 GB/256 GB SSD/Windows 11 Home) 81WQ00MQIN|81WQ00NXIN Laptop (15.6 Inch, Platinum Grey, 1.7 Kg, With MS Office) 4.1319 Ratings & 31 Reviews Extra ₹3730 off ₹26,250"
          },{
            _id:203 ,
            productCategory: "Laptops",
            productCompany: "Lenovo",
            productImageUrl: "https://rukminim1.flixcart.com/image/416/416/l3929ow0/computer/d/n/c/82c3a008ih-laptop-lenovo-original-imageexr8yzmydfd.jpeg?q=70",
            productDescription: "Lenovo Celeron Dual Core - (4 GB/256 GB HDD/256 GB SSD/DOS) 82C3A00DIH Laptop (15.6 inch, Grey) 3.8148 Ratings & 10 Reviews ₹19,990"
          },{
            _id:204 ,
            productCategory: "Laptops",
            productCompany: "Lenovo",
            productImageUrl: "https://rukminim1.flixcart.com/image/416/416/xif0q/computer/u/h/h/15ach6-gaming-laptop-lenovo-original-imaggmxtjewnjpeq.jpeg?q=70",
            productDescription: "Lenovo IdeaPad Gaming 3 Ryzen 7 Octa Core AMD R7-5800H - (8 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/NVIDIA GeForce RTX 3050) IdeaPad Gaming3 15ACH6D2 Gaming Laptop (15.6 inch, Shadow Black, 2.25 Kg, With MS Office) 4.5336 Ratings & 43 Reviews Extra ₹7000 off ₹67,990"
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
                           <button className="contentButtonProduct">Add to Cart</button>
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

export default Lenovo ;

