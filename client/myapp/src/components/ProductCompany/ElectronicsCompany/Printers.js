import Header from "../../Home/Header";

const Printers = () => {
    const data = [
        {
            _id: 60 ,
            productCategory: "Printers",
            productCompany: "Cannon",
            productImageUrl: "https://rukminim1.flixcart.com/image/612/612/l5iid8w0/printer/l/z/7/-original-imagg6cmyt9yfvta.jpeg?q=70",
            productDescription: "Canon PIXMA GM2070 Single Function WiFi Monochrome Inkjet Printer with Voice Activated Printing Google Assistant and Alexa with Auto-Duplex & Optional Color Printing (Black, Ink Tank) 4.1533 Ratings & 59 Reviews Special price ₹7,999"
          },{
            _id: 61 ,  
            productCategory: "Printers",
            productCompany: "HP",
            productImageUrl: "https://rukminim1.flixcart.com/image/612/612/kvtuxe80/printer/v/6/z/25r69a-hp-original-imag8mvzdjpuhvhn.jpeg?q=70",
            productDescription: "HP Deskjet Ink advantage Ultra 4826 All-in-one Multi-function WiFi Color Inkjet Printer (White, Ink Cartridge) 4.1904 Ratings & 113 Reviews Special price ₹7,999"
          },{
            _id: 62 ,
            productCategory: "Printers",
            productCompany: "Cannon",
            productImageUrl: "https://rukminim1.flixcart.com/image/612/612/l2nmnww0/printer/t/x/e/-original-imagdy5ta7t7wggp.jpeg?q=70",
            productDescription: "Canon G3012 Multi-function WiFi Color Inkjet Printer (Color Page Cost: 0.21 Rs. | Black Page Cost: 0.09 Rs. | Borderless Printing) (Black, Ink Tank, 2 Ink Bottles Included) 4.49,145 Ratings & 1,194 Reviews Special price ₹14,499"
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

export default Printers ;