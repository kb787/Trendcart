import Header from "../../Home/Header";

const Monitor = () => {
    const data = [
        {
            _id: 60 ,
            productCategory: "Monitors",
            productCompany: "Samsung",
            productImageUrl: "https://rukminim1.flixcart.com/image/416/416/kynb6vk0/monitor/1/n/s/lf22t354fhwxxl-full-hd-22-lf22t354fhwxxl-samsung-original-imagats2rjbg9uhv.jpeg?q=70",
            productDescription: "SAMSUNG 22 inch Full HD IPS Panel Monitor (LF22T354FHWXXL) (Response Time: 5 ms, 75 Hz Refresh Rate) 4.46,089 Ratings & 762 Reviews Special price ₹7,999"
          },{
            _id: 61 ,  
            productCategory: "Monitors",
            productCompany: "Samsung",
            productImageUrl: "https://rukminim1.flixcart.com/image/416/416/kynb6vk0/monitor/1/n/s/lf22t354fhwxxl-full-hd-22-lf22t354fhwxxl-samsung-original-imagats2rjbg9uhv.jpeg?q=70",
            productDescription: "SAMSUNG 22 inch Full HD IPS Panel Monitor (LF22T354FHWXXL) (Response Time: 5 ms, 75 Hz Refresh Rate) 4.46,089 Ratings & 762 Reviews Special price ₹7,999"
          },{
            _id: 62 ,
            productCategory: "Monitors",
            productCompany: "Samsung",
            productImageUrl: "https://rukminim1.flixcart.com/image/416/416/l5ld8y80/monitor/l/k/s/-original-imagg897ufhyvwqq.jpeg?q=70",
            productDescription: "SAMSUNG 24 inch Full HD LED Backlit IPS Panel with 3-Sided Borderless Display, Game & Free Sync Mode, Eye Saver Mode Response Time: 5 ms, 75 Hz Refresh Rate 4.46,089 Ratings & 762 Reviews Special price ₹9,399"
          } ,
          {
            _id: 63 ,
            productCategory: "Monitors",
            productCompany: "Samsung",
            productImageUrl: "https://rukminim1.flixcart.com/image/416/416/kthjy4w0/monitor/n/0/a/27mk600m-full-hd-27mk600m-lg-original-imag6tb9yn4pmden.jpeg?q=70",
            productDescription: "LG 27 inch Full HD LED Backlit IPS Panel with OnScreen Control, Reader Mode, Black Stabilizer, Anti-Flicker Technology, Response Time: 5 ms, 75 Hz Refresh Rate) 4.4445 Ratings & 56 Reviews Special price ₹13,999"
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

export default Monitor ;