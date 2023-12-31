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
function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Routes>
            <Route path="/" element = {<Homepage/>}/>
            <Route  path = "/Login" element = {<Login/>}/>
            <Route  path = "/Register" element = {<Register/>}/>
     {/*       <Route  path = "/Realme" element = {<Realme/>}/>
            <Route  path = "/Projector" element = {<Projector/>}/>
            <Route  path = "/Printer" element = {<Printer/>}/>
            <Route  path = "/Powerbank" element = {<Powerbank/>}/>
            <Route  path = "/Poco" element = {<Poco/>}/>
            <Route  path = "/Oppo" element = {<Oppo/>}/>
            <Route  path = "/Monitor" element = {<Monitor/>}/>
            <Route  path = "/Lenovo" element = {<Lenovo/>}/>
            <Route  path = "/HP" element = {<HP/>}/>
            <Route  path = "/HomeAppliances" element = {<HomeAppliances/>}/>
            <Route  path = "/Groceries" element = {<Groceries/>}/>
            <Route  path = "/ElectronicsComp" element = {<ElectronicsComp/>}/>
            <Route  path = "/Earphone" element = {<Earphone/>}/>
            <Route  path = "/Dell" element = {<Dell/>}/>
            <Route  path = "/Content" element = {<Content/>}/>
            <Route  path = "/Clothing" element = {<Clothing/>}/>
            <Route  path = "/Asus" element = {<Asus/>}/>
            <Route  path = "/AppleMac" element = {<AppleMac/>}/>
            <Route  path = "/ApplePhone" element = {<ApplePhone/>}/>
            <Route  path = "/Redmi" element = {<Redmi/>}/>
            <Route path = "/Profile" element = {<Profile/>}/>
  <Route path = "/Shows" element = {<Shows/>}/> */}
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
