import React from "react";
import { Link } from "react-router-dom";
// import slider1 from '../../assets/img_bg_1-PzvG2r05.jpg';
// import slider2 from '../../assets/img_bg_2-DzCs5o-0.jpg';

export default function Home() {
  return (
    <>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div className="carousel-inner">
          <div className="carousel-item item1 active">
            <div className="content slider-content text-black">
              <h2>Hi!</h2>
              <h2>I'm Jackson</h2>
              <p className="fs-5 fw-light">
                100% html5 bootstrap templates Made <br /> By{" "}
                <Link to="" className="active">
                  Colorlib.com
                </Link>
              </p>
              <button className="home-btn text-uppercase py-2 px-3">
                download cv <i className="fa-solid fa-download"></i>
              </button>
            </div>
          </div>
          <div className="carousel-item item2">
            <div className="content slider-content text-black">
              <h2>I am</h2>
              <h2>a Designer</h2>
              <p className="fs-5 fw-light">
                100% html5 bootstrap templates Made <br /> By{" "}
                <Link to="" className="active">
                  Colorlib.com
                </Link>
              </p>
              <button className="home-btn text-uppercase py-2 px-3">
                view portfolio <i className="fa-solid fa-briefcase"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
