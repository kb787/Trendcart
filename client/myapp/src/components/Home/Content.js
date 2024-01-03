
import { Link } from "react-router-dom";


import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ElectronicsCollection from "../Products/SampleData/ElectronicsCollection";
import LaptopCollection from "../Products/SampleData/LaptopCollection" ;
import MobileCollection from "../Products/SampleData/MobileCollection";

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
