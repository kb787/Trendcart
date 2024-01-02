
import { Link } from "react-router-dom";
import ElectronicsCollection from "../Products/SampleData/ElectronicsCollection";
import MobileCollection from "../Products/SampleData/MobileCollection";
import LaptopCollection from "../Products/SampleData/LaptopCollection";

const Content = () => {
  return (
    <main>
      <div className="Content">
        <div className="cHeading">Best of Electronics</div>
        <ElectronicsCollection/>
        <div className="cHeading">Best of Mobiles</div>
        <MobileCollection/>
        <div className="cHeading">Best of Laptops</div>
        <LaptopCollection/> 
      </div>
    </main>
  );
};

export default Content;
