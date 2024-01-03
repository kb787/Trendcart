import logo from './logo.svg';
import './App.css';
import Login from './components/Authentication/Login' ;
import Homepage from './components/Home/Homepage';
import Register from './components/Authentication/Register';
import Profile from './Profile' ;
import {BrowserRouter,Route,Routes} from 'react-router-dom' ;
import Lenovo from './components/ProductCompany/LaptopCompany/Lenovo';
import Asus from './components/ProductCompany/LaptopCompany/Asus';
import AppleMac from './components/ProductCompany/LaptopCompany/AppleMac';
import HP from './components/ProductCompany/LaptopCompany/HP';
import Realme from './components/ProductCompany/MobileCompany/Realme';
import Poco from './components/ProductCompany/MobileCompany/Poco';
import Oppo from './components/ProductCompany/MobileCompany/Oppo';
import Printers from './components/ProductCompany/ElectronicsCompany/Printers';
import Monitor from './components/ProductCompany/ElectronicsCompany/Monitor';
import Projector from './components/ProductCompany/ElectronicsCompany/Projector';
import Earphone from './components/ProductCompany/ElectronicsCompany/Earphone';
import ApplePhone from './components/ProductCompany/MobileCompany/ApplePhone';
import CartDisplay from './components/Cart/CartDisplay';
import { CartProvider } from './components/Cart/CartCreation';

function App() {
  return (
    <div className="App">
    <CartProvider>  
    <BrowserRouter>
        <Routes>
            <Route path="/Homepage" element = {<Homepage/>}/>
            <Route  path = "/Login" element = {<Login/>}/>
            <Route  path = "/Register" element = {<Register/>}/>
            <Route  path = "/Lenovo" element = {<Lenovo/>}/>
            <Route  path = "/Asus" element = {<Asus/>}/>
            <Route  path = "/AppleMac" element = {<AppleMac/>}/>
            <Route  path = "/HP" element = {<HP/>}/>
            <Route  path = "/Realme" element = {<Realme/>}/>
            <Route  path = "/Poco" element = {<Poco/>}/>
            <Route  path = "/Oppo" element = {<Oppo/>}/>
            <Route  path = "/Printer" element = {<Printers/>}/>
            <Route  path = "/Monitor" element = {<Monitor/>}/>
            <Route  path = "/Projector" element = {<Projector/>}/>
            <Route  path = "/Earphone" element = {<Earphone/>}/>
            <Route  path = "/ApplePhone" element = {<ApplePhone/>}/>
            <Route  path = "/CartDisplay" element = {<CartDisplay/>}/>
        </Routes>
    </BrowserRouter>
    </CartProvider>
    </div>
  );
}

export default App;
