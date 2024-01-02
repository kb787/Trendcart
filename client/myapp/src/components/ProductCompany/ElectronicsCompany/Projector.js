import Header from "../../Home/Header";

const Projector = () => {
    const data = [
        {
            _id: 60,
            productCategory: "Projectors",
            productCompany: "Zebronics",
            productImageUrl: "https://rukminim1.flixcart.com/image/416/416/kyj0vbk0/projector/r/n/r/-original-imagaqky6yftfmn8.jpeg?q=70",
            productDescription: "ZEBRONICS ZEB-PIXAPLAY 15 with Android 9.0, Full HD 1080p, WiFi/BT v5.1 (3400 lm / 1 Speaker / Remote Controller) Projector (Black) 4.2622 Ratings & 107 Reviews Special price ₹14,499"
          },{
            _id: 61 ,  
            productCategory: "Projectors",
            productCompany: "Shopexo",
            productImageUrl: "https://rukminim1.flixcart.com/image/416/416/kwi5evk0/projector/p/6/s/t4-uc68-wifi-lcd-hd-1024p-10-inbuilt-youtube-hd-ready-shopexo-original-imag96e5ue7eggss.jpeg?q=70",
            productDescription: "Shopexo T4 UC68 Wifi LCD HD 1024P (4000 lm / 1 Speaker / Wireless / Remote Controller) Portable Projector (Blue) 4.2150 Ratings & 37 Reviews Special price ₹6,174"
          },{
            _id: 62 ,
            productCategory: "Projectors",
            productCompany: "Egate",
            productImageUrl: "https://rukminim1.flixcart.com/image/416/416/xif0q/projector/d/o/8/-original-imaghvkbk8yfwfqh.jpeg?q=70",
            productDescription: "Egate K9 Pro-Max Android Full HD| 4K Support | Android 9.0 |4D Keystone | Home Cinema (6600 lm / 1 Speaker / Wireless / Remote Controller) Portable Projector (White) 4.190 Ratings & 17 Reviews Special price ₹16,191"
          } ,

          {
            _id: 63 ,
            productCategory: "Projectors",
            productCompany: "Playmp1",
            productImageUrl: "https://rukminim1.flixcart.com/image/416/416/krxtrww0/projector/q/y/7/mp-1-smart-wifi-full-hd-projector-150-inch-display-mpp-play-original-imag5hhykqzz9jrd.jpeg?q=70",
            productDescription: "PLAY MP1 Newest WiFi Native Full HD Led Advance Projector 400-inch Display for Multipurpose (4500 lm / Wireless / Remote Controller) Portable Projector (White/ Black) 4269 Ratings & 64 Reviews Special price ₹13,671"
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

export default Projector ;