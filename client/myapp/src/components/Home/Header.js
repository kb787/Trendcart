
import { Link } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome" ;
import {faCartShopping,faLocationDot,faUser,faBagShopping} from "@fortawesome/free-solid-svg-icons" ;
import {} from "@fortawesome/fontawesome-svg-core" ;
import { useState } from "react";


const Header = ({onSearchInputChange}) => {
  const [searchInput,setSearchInput] = useState("") ; 
  
  const handleSearch = () => {
    onSearchInputChange(searchInput);
  };

  const handleSearchInputChange = (e) => {
     setSearchInput(e.target.value) ;
     handleSearch() ;
  }
  return (
    <header className="header">
      <div>
        <div>
          <ul className="navg">
            <li className="bLogo">ShopMart</li>
            <li>
              <Link className="link" to="/Homepage">
                Home
              </Link>
            </li>
         {/*   
            <li>
              <div className = "navCollection">
              <FontAwesomeIcon icon = {faLocationDot} className = "iconStyling" />
              <p className = "iconPara">Location</p> 
              </div> 
            </li>
        */}  
            <li>
              <div className="headerForm">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="headerLabel"
                >
                  Search Products
                </label>
                <input
                  type="text"
                  className="searchForm"
                  id="exampleFormControlInput1"
                  placeholder="Enter Brand name,product name"
                  value = {searchInput}
                  onChange={handleSearchInputChange}
                  onClick={handleSearch}
                />
              </div>
            </li>
          {/*  
            <li>
              <div className = "navCollection">
              <FontAwesomeIcon icon = {faUser} className = "iconStyling" />
              <Link className="link" to = "/Profile">
              <p className = "iconPara"> 
                My Profile
              </p>  
                </Link>
              </div> 
            </li>
      */}  

        {/*    
            <li>
              <div className = "navCollection">
              <FontAwesomeIcon icon = {faBagShopping} className = "iconStyling" />
              <p className = "iconPara">Orders and Returns</p> 
              </div> 
            </li>
      */}  
            <li>
            <Link className="link" to="/Shows">
                Watch Shows
              </Link>
            </li>
            <li>
              <div className = "navCollection">  
              <FontAwesomeIcon icon = {faCartShopping} className = "iconStyling" />
              <Link className="link" to="/CartDisplay">
              <p className = "iconPara">Cart</p>
              </Link> 
              </div> 
            </li>
          </ul>
          <ul className="itemCat">
            <li>
            <h5 className="cardTit">Grocery</h5>
            </li>
            <li>
              <h5 className="cardTit">Clothing</h5> 
            </li>
            <li>
            <h5 className="cardTit">Mobiles</h5> 
            </li>
            <li>
            <h5 className="cardTit">Laptops</h5>   
            </li>
            <li>
            <h5 className="cardTit">Projectors</h5>   
            </li>
            <li>
            <h5 className="cardTit">Printers</h5>   
            </li>
            <li>
            <h5 className="cardTit">Earphones</h5>   
            </li>
            <li>
            <h5 className="cardTit">Monitors</h5>   
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
