import Header from "../../Home/Header";

const Earphone = () => {
    const data = [
        {
            _id: 60,
            productCategory: "Earphones",
            productCompany: "Boult",
            productImageUrl: "https://rukminim1.flixcart.com/image/612/612/xif0q/headphone/g/q/q/-original-imagkryzg5hjtrzd.jpeg?q=70",
            productDescription: "Boult Audio ProBass Escape with Zen Tech ENC mic 10Hrs Playtime Extra Deep Bass Bluetooth Headset (Black, In the Ear) 3.835,170 Ratings & 3,502 Reviews ₹899"
          },{
            _id: 61 ,  
            productCategory: "Earphones",
            productCompany: "Aroma",
            productImageUrl: "https://rukminim1.flixcart.com/image/416/416/xif0q/headphone/l/r/d/nb119c-carter-48-hours-playing-time-fast-charging-bluetooth-original-imagh7zhe2nmdmhx.jpeg?q=70",
            productDescription: "Aroma NB119C Carter 48 Hours Playing Time Fast Charging Bluetooth Neckband Earphone Bluetooth Headset (Green, In the Ear) 459,535 Ratings & 4,387 Reviews Special price ₹395"
          },{
            _id: 62 ,
            productCategory: "Earphones",
            productCompany: "Oneplus",
            productImageUrl: "https://rukminim1.flixcart.com/image/416/416/l0sgyvk0/headphone/e/w/c/buds-z2-oneplus-original-imagcg5gfpcg5ndv.jpeg?q=70",
            productDescription: "OnePlus Bullets Wireless Z2 with Fast Charge 30 Hrs Battery Life Earphones with mic Bluetooth Headset (Magico Black, In the Ear) 4.23,68,880 Ratings & 25,164 Reviews Special price ₹1,699"
          } ,

          {
            _id: 63 ,
            productCategory: "Earphones",
            productCompany: "Oneplus",
            productImageUrl: "https://rukminim1.flixcart.com/image/416/416/l31x2fk0/headphone/a/s/h/-original-image9ehehz8amg2.jpeg?q=70",
            productDescription: "boAt Rockerz 255 Pro+ with ASAP Charge and upto 40 Hours Playback Bluetooth Headset (Active Black, In the Ear) 4.25,33,302 Ratings & 45,433 Reviews Special price ₹1,299"
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

export default Earphone ;