import Header from "../../Home/Header";

const AppleMac = () => {
    const data = [
        {
            _id: 31 ,
            productCategory: "Laptops",
            productCompany: "Apple",
            productImageUrl: "https://rukminim1.flixcart.com/image/416/416/kp5sya80/screen-guard/tempered-glass/o/v/n/apple-macbook-air-m1-13-3-inch-lightwings-original-imag3gh5xftgbpg3.jpeg?q=70",
            productDescription: "APPLE 2020 Macbook Air M1 - (8 GB/256 GB SSD/Mac OS Big Sur) MGN63HN/A (13.3 inch, Space Grey, 1.29 kg) 4.78,634 Ratings & 775 Reviews Extra ₹8000 off ₹86,990"
          },{
            _id: 32 ,  
            productCategory: "Laptops",
            productCompany: "Apple",
            productImageUrl: "https://rukminim1.flixcart.com/image/416/416/l4hcx3k0/computer/r/6/b/macbook-pro-thin-and-light-laptop-apple-original-imagfdeu9rmugapt.jpeg?q=70",
            productDescription: "APPLE 2022 MacBook Pro M2 - (8 GB/512 GB SSD/Mac OS Monterey) MNEJ3HN/A (13.3 Inch, Space Grey, 1.38 Kg) 4.715 Ratings & 1 Reviews Extra ₹9910 off ₹1,39,990"
          },{
            _id: 33 ,
            productCategory: "Laptops",
            productCompany: "Apple",
            productImageUrl: "https://rukminim1.flixcart.com/image/416/416/kuyf8nk0/computer/3/n/s/mk183hn-a-laptop-apple-original-imag7yzkbgbwvwq3.jpeg?q=70",
            productDescription: "APPLE 2021 Macbook Pro M1 Max - (32 GB/1 TB SSD/Mac OS Monterey) MK1A3HN /A (16.2 inch, Space Grey�, 2.2 kg)Be the first to Review this product ₹3,07,990"
          },{
            _id:34 ,
            productCategory: "Laptops",
            productCompany: "Apple",
            productImageUrl: "https://rukminim1.flixcart.com/image/416/416/kuyf8nk0/computer/3/n/s/mk183hn-a-laptop-apple-original-imag7yzkbgbwvwq3.jpeg?q=70",
            productDescription: "APPLE 2021 Macbook Pro M1 Pro - (16 GB/1 TB SSD/Mac OS Monterey) MK193HN/A (16.2 inch, Space Grey�, 2.1 kg) 4.8114 Ratings & 14 Reviews ₹2,41,990"
          },{
            _id:35 ,
            productCategory: "Laptops",
            productCompany: "Apple",
            productImageUrl: "https://rukminim1.flixcart.com/image/312/312/jyq5oy80/computer/t/y/2/apple-na-thin-and-light-laptop-original-imafgwev6abfznds.jpeg?q=70",
            productDescription: "APPLE MacBook Pro Core i5 8th Gen - (8 GB/512 GB SSD/Mac OS Mojave) MV972HN/A (13.3 inch, Space Grey, 1.37 kg) 4.2107 Ratings & 13 Reviews ₹1,63,990"
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

export default AppleMac ;