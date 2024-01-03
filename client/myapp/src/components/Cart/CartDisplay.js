import React from 'react';
import { useCart } from './CartCreation';
import Header from '../Home/Header';

const CartDisplay = () => {
  const { cart } = useCart();
  return (
   <div className = "CartHomepage">  
    <Header/>
    <div className = "CartContent">
      <h2 className = "CartHeading">Cart Items</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className = "contentCardsProduct">
          {cart.map((item) => (
            <li key={item._id}>    
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
                      </li>        
             </div>
            </li>
          ))}
        </ul>
      )}
    </div>
    </div>  
  );
};

export default CartDisplay;
