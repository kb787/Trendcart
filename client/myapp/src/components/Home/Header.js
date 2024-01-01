
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div>
        <div>
          <ul className="navg">
            <li className="bLogo">ShopMart</li>
            <li>
              <Link className="link" to="/">
                Home
              </Link>
            </li>
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
                />
              </div>
            </li>
            <li>
            <Link className="link" to="/Shows">
                Watch Shows
              </Link>
            </li>
          </ul>
          <ul className="itemCat">
            <li>
              <div className="headerCard">
                <img
                  src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100"
                  className="headerImg"
                  alt="..."
                />
                <div className="headerBody">
                  <h5 className="cardTit">Electronics</h5>
                  <Link className="link" to="/ElectronicsComp">
                    <button className="headerButton">Visit</button>
                  </Link>
                </div>
              </div>
            </li>
            <li>
              <div className="headerCard">
                <img
                  src="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100"
                  className="headerImg"
                  alt="..."
                />
                <div className="headerBody">
                  <h5 className="cardTit">Grocery</h5>
                  <Link className="link" to="/Groceries">
                    <button className="headerButton">Visit</button>
                  </Link>
                </div>
              </div>
            </li>
            <li>
              <div className="headerCard">
                <img
                  src="https://rukminim1.flixcart.com/flap/128/128/image/c12afc017e6f24cb.png?q=100"
                  className="headerImg"
                  alt="..."
                />
                <div className="headerBody">
                  <h5 className="cardTit">Clothing</h5>
                  <Link className="link" to="/Clothing">
                    <button className="headerButton">Visit</button>
                  </Link>
                </div>
              </div>
            </li>
            <li>
              <div className="headerCard">
                <img
                  src="https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100"
                  className="headerImg"
                  alt="..."
                />
                <div className="headerBody">
                  <h5 className="cardTit">Home Appliances</h5>
                  <Link className="link" to="/HomeAppliances">
                    <button className="headerButton">Visit</button>
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
