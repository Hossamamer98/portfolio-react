import React from "react";

export default function Skills() {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="content">
        <p className="page-title text-uppercase">my speciality</p>
        <h4 className="page-headline text-uppercase my-4">my skills</h4>
        <p className="description text-dark-emphasis ">
          The Big Oxmox advised her not to do so, because there were thousands
          of bad Commas, wild Question Marks and devious Semikoli, but the
          Little Blind Text didn't listen. She packed her seven versalia, put
          her initial into the belt and made herself on the way.
        </p>

        <div className="row mt-5">
          <div className="col-12 col-lg-6">
            <div className="mt-4">
              <p className="progress-title">Photoshop</p>
              <div className="progress-bar">
                <div className="progress photoshop"></div>
              </div>
            </div>

            <div className="mt-4">
              <p className="progress-title">HTML5</p>
              <div className="progress-bar">
                <div className="progress html"></div>
              </div>
            </div>

            <div className="mt-4">
              <p className="progress-title">WordPress</p>
              <div className="progress-bar">
                <div className="progress wordpress"></div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div className="mt-4">
              <p className="progress-title">jQuery</p>
              <div className="progress-bar">
                <div className="progress jquery"></div>
              </div>
            </div>

            <div className="mt-4">
              <p className="progress-title">CSS3</p>
              <div className="progress-bar">
                <div className="progress css"></div>
              </div>
            </div>

            <div className="mt-4">
              <p className="progress-title">SEO</p>
              <div className="progress-bar">
                <div className="progress seo"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
