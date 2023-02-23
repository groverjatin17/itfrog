import { useEffect } from "react";
import addParlx from "../../common/addParlx";

const IntroTxt2 = () => {
  useEffect(() => {
    setTimeout(() => addParlx());
  }, []);

  console.log("rendering intro text 2");
  return (
    <header
      className="slider simpl fixed-slider bg-img valign"
      style={{ backgroundImage: "url(/img/slid/dev-hero.jpg)" }}
      data-overlay-dark="6"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <div className="caption center mt-50">
              <h6>Digital Transformation.</h6>
              <h1>IT FROG</h1>
              <p>
                Empowering businesses to digitize and thrive in the digital age
                with innovative solutions and support.
              </p>
              <a href="#0" className="btn-curve btn-lit mt-40">
                <span>Get Started Now</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default IntroTxt2;
