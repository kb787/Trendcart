
import { Link } from "react-router-dom";

const Content = () => {
  return (
    <main>
      <div className="Content">
        <div className="cHeading">Best of Electronics</div>
        <ul className="contentCards">
          <li>
            <div className="contentCard">
              <img
                src="https://rukminim1.flixcart.com/image/200/200/printer/j/j/y/hp-laserjet-m1005-multifunction-original-imadxhzpeb9qbrfg.jpeg?q=70"
                className="contentImg"
                alt="..."
              />
              <div className="contentBody">
                <h5 className="contentTit">Printer</h5>
                <div>
                  <Link to="/Printer">
                    <button className="contentButton">Visit Store</button>
                  </Link>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="contentCard">
              <img
                src="https://rukminim1.flixcart.com/image/416/416/xif0q/headphone/l/r/d/nb119c-carter-48-hours-playing-time-fast-charging-bluetooth-original-imagh7zhe2nmdmhx.jpeg?q=70"
                className="contentImg"
                alt="..."
              />
              <div className="contentBody">
                <h5 className="contentTit">Earphone</h5>
                <div>
                  <Link to="/Earphone">
                    <button className="contentButton">Visit Store</button>
                  </Link>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="contentCard">
              <img
                src="https://rukminim1.flixcart.com/image/200/200/kynb6vk0/monitor/1/n/s/lf22t354fhwxxl-full-hd-22-lf22t354fhwxxl-samsung-original-imagats2rjbg9uhv.jpeg?q=70"
                className="contentImg"
                alt="..."
              />
              <div className="contentBody">
                <h5 className="contentTit">Monitor</h5>
                <div>
                  <Link to="/Monitor">
                    <button className="contentButton">Visit Store</button>
                  </Link>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="contentCard">
              <img
                src="https://rukminim1.flixcart.com/image/200/200/kx50gi80/projector/r/9/p/zeb-pixa-play-12-5-6-dobly-audio-led-projector-zebronics-original-imag9z3yujqmzqt4.jpeg?q=70"
                className="contentImg"
                alt="..."
              />
              <div className="contentBody">
                <h5 className="contentTit">Projector</h5>
                <div>
                  <Link to="/Projector">
                    <button className="contentButton">Visit Store</button>
                  </Link>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="contentCard">
              <img
                src="https://rukminim1.flixcart.com/image/200/200/l1pc3gw0/power-bank/e/u/y/-original-imagd7dzan7sakt2.jpeg?q=70"
                className="contentImg"
                alt="..."
              />
              <div className="contentBody">
                <h5 className="contentTit">Power Banks</h5>
                <Link to="/Powerbank">
                  <button className="contentButton">Visit Store</button>
                </Link>
              </div>
            </div>
          </li>
        </ul>
        <div className="cHeading">Best of Mobiles</div>
        <ul className="contentCards">
          <li>
            <div className="contentCard">
              <img
                src="https://rukminim1.flixcart.com/image/416/416/knrsjgw0/mobile/s/b/z/8-pro-rmx3081-realme-original-imag2dcabdfyjrtb.jpeg?q=70"
                className="contentMobImg"
                alt="..."
              />
              <div className="contentBody">
                <h5 className="contentTit">Realme</h5>
                <Link to="/Realme">
                  <button className="contentButton">Visit Store</button>
                </Link>
              </div>
            </div>
          </li>
          <li>
            <div className="contentCard">
              <img
                src="https://rukminim1.flixcart.com/image/416/416/kfbfr0w0/mobile/f/x/r/poco-x3-mzb07z2in-original-imafvt3hz54npsba.jpeg?q=70"
                className="contentMobImg"
                alt="..."
              />
              <div className="contentBody">
                <h5 className="contentTit">Poco</h5>
                <Link to="/Poco">
                  <button className="contentButton">Visit Store</button>
                </Link>
              </div>
            </div>
          </li>
          <li>
            <div className="contentCard">
              <img
                src="https://rukminim1.flixcart.com/image/416/416/kj0bp8w0-0/mobile/d/e/1/9-power-mobhqab1-redmi-original-imafyz93hghvjkmu.jpeg?q=70"
                className="contentMobImg"
                alt="..."
              />
              <div className="contentBody">
                <h5 className="contentTit">Redmi</h5>
                <Link to="/Redmi">
                  <button className="contentButton">Visit Store</button>
                </Link>
              </div>
            </div>
          </li>
          <li>
            <div className="contentCard">
              <img
                src="https://rukminim1.flixcart.com/image/416/416/kg8avm80/mobile/j/f/9/apple-iphone-12-dummyapplefsn-original-imafwg8dkyh2zgrh.jpeg?q=70"
                className="contentMobImg"
                alt="..."
              />
              <div className="contentBody">
                <h5 className="contentTit">Apple iPhone</h5>
                <Link to="/ApplePhone">
                  <button className="contentButton">Visit Store</button>
                </Link>
              </div>
            </div>
          </li>
          <li>
            <div className="contentCard">
              <img
                src="https://rukminim1.flixcart.com/image/416/416/xif0q/mobile/u/r/k/-original-imagge6uzzhkz4bh.jpeg?q=70"
                className="contentMobImg"
                alt="..."
              />
              <div className="contentBody">
                <h5 className="contentTit">Oppo</h5>
                <Link to="/Oppo">
                  <button className="contentButton">Visit Store</button>
                </Link>
              </div>
            </div>
          </li>
        </ul>
        <div className="cHeading">Best of Laptops</div>
        <ul className="contentCards">
          <li>
            <div className="contentCard">
              <img
                src="https://rukminim1.flixcart.com/image/312/312/keaaavk0/computer/x/m/y/lenovo-na-laptop-original-imafuzt8r5jqppfn.jpeg?q=70"
                className="contentImg"
                alt="..."
              />
              <div className="contentBody">
                <h5 className="contentTit">Lenovo</h5>
                <Link to="/Lenovo">
                  <button className="contentButton">Visit Store</button>
                </Link>
              </div>
            </div>
          </li>
          <li>
            <div className="contentCard">
              <img
                src="https://rukminim1.flixcart.com/image/312/312/kp2y2kw0/computer/y/0/c/na-thin-and-light-laptop-asus-original-imag3ebnzawky4kn.jpeg?q=70"
                className="contentImg"
                alt="..."
              />
              <div className="contentBody">
                <h5 className="contentTit">Asus</h5>
                <Link to="/Asus">
                  <button className="contentButton">Visit Store</button>
                </Link>
              </div>
            </div>
          </li>
          <li>
            <div className="contentCard">
              <img
                src="https://rukminim1.flixcart.com/image/312/312/kp5sya80/screen-guard/tempered-glass/o/v/n/apple-macbook-air-m1-13-3-inch-lightwings-original-imag3gh5xftgbpg3.jpeg?q=70"
                className="contentImg"
                alt="..."
              />
              <div className="contentBody">
                <h5 className="contentTit">Apple</h5>
                <Link to="/AppleMac">
                  <button className="contentButton">Visit Store</button>
                </Link>
              </div>
            </div>
          </li>
          <li>
            <div className="contentCard">
              <img
                src="https://rukminim1.flixcart.com/image/312/312/kbqu4cw0/computer/q/x/r/hp-original-imaftyzachgrav8f.jpeg?q=70"
                className="contentImg"
                alt="..."
              />
              <div className="contentBody">
                <h5 className="contentTit">HP</h5>
                <Link to="/HP">
                  <button className="contentButton">Visit Store</button>
                </Link>
              </div>
            </div>
          </li>
          <li>
            <div className="contentCard">
              <img
                src="https://rukminim1.flixcart.com/image/312/312/l58iaa80/computer/q/s/w/inspiron-3511-laptop-dell-original-imagfycrbnpu2nbh.jpeg?q=70"
                className="contentImg"
                alt="..."
              />
              <div className="contentBody">
                <h5 className="contentTit">Dell</h5>
                <Link to="/Dell">
                  <button className="contentButton">Visit Store</button>
                </Link>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Content;
