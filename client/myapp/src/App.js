import logo from './logo.svg';
import './App.css';
import AppleMac from './AppleMac' ;
import ApplePhone from './ApplePhone' ;
import Asus from './Asus' ;
import Clothing from './Clothing' ;
import Content from './Content' ;
import Dell from './Dell' ;
import Earphone from './Earphone' ;
import ElectronicsComp from './ElectronicsComp' ; 
import Groceries from './Groceries' ; 
import Header from './Header' ; 
import HomeAppliances from './HomeAppliances' ;
import HP from './HP' ;
import Lenovo from './Lenovo' ;
import Login from './components/Authentication/Login' ;
import Monitor from './Monitor' ;
import Oppo from './Oppo' ;
import Poco from './Poco' ;
import Powerbank from './Powerbank' ;
import Printer from './Printer' ;
import Projector from './Projector' ;
import Realme from './Realme' ;
import Redmi from './Redmi' ;
import Homepage from './Homepage' ;
import Register from './components/Authentication/Register';
import Profile from './Profile' ;
import Shows from './Shows' ;
import {BrowserRouter,Route,Routes} from 'react-router-dom' ;
import LaptopMainContainer from './components/Products/Laptops/LaptopMainContainer';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Routes>
            <Route path="/" element = {<Homepage/>}/>
            <Route  path = "/Login" element = {<Login/>}/>
            <Route  path = "/Register" element = {<Register/>}/>
            <Route  path = "/LaptopItemsPage" element = {<LaptopMainContainer/>}/>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
