import Header from "../../Home/Header";

const Oppo = () => {
    const data = [
        {
            _id: 111 ,
            productCategory: "Mobiles",
            productCompany: "Oppo",
            productImageUrl: "https://rukminim1.flixcart.com/image/416/416/l2jcccw0/mobile/h/x/3/-original-imagduwqakhhkrse.jpeg?q=70",
            productDescription: "OPPO K10 (Blue Flame, 128 GB) (6 GB RAM) 4.497,046 Ratings & 7,174 Reviews Extra ₹5009 off ₹13,990"
          },{
            _id: 112 ,  
            productCategory: "Mobiles",
            productCompany: "Oppo",
            productImageUrl: "https://rukminim1.flixcart.com/image/416/416/l2jcccw0/mobile/h/x/3/-original-imagduwqakhhkrse.jpeg?q=70",
            productDescription: "OPPO K10 (Black Carbon, 128 GB) (6 GB RAM) 4.497,046 Ratings & 7,174 Reviews Extra ₹5009 off ₹13,990"
          },{
            _id: 113 ,
            productCategory: "Mobiles",
            productCompany: "Oppo",
            productImageUrl: "https://rukminim1.flixcart.com/image/416/416/ku1k4280/mobile/j/x/v/f19s-cph2223-oppo-original-imag78zafhg3w69x.jpeg?q=70",
            productDescription: "OPPO F19s (Glowing Gold, 128 GB) (6 GB RAM)#JustHere 4.59,349 Ratings & 513 Reviews Extra ₹7500 off ₹15,490"
          },{
            _id:114 ,
            productCategory: "Mobiles",
            productCompany: "Oppo",
            productImageUrl: "https://rukminim1.flixcart.com/image/416/416/kn4xhu80/mobile/r/5/5/f19-cph2219-oppo-original-imagfvj5usebqhh4.jpeg?q=70",
            productDescription: "OPPO F19 (Midnight Blue, 128 GB) (6 GB RAM) 4.323,471 Ratings & 1,714 Reviews Extra ₹6000 off ₹14,990"
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

export default Oppo ;