import React, { useRef } from "react";
import { Link } from "react-router-dom";

// import showMore from './Work'

export default function Work() {
  const imgRefs = useRef([]);
  const btnRef = useRef();

  function showMore() {
    imgRefs.current.forEach((img) => {
      img.classList.add("d-block");
      img.classList.remove("d-none");
    });
    btnRef.current.classList.add("d-none");
    btnRef.current.classList.remove("d-block");
  }

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 mt-5">
      <div className="content">
        <p className="page-title text-uppercase">my work</p>
        <h4 className="page-headline text-uppercase my-4">recent work</h4>

        <ul className="text-capitalize list-unstyled d-flex">
          <li className="me-4">
            <Link to="#" className="text-decoration-none text-black active">
              graphic design
            </Link>
          </li>
          <li className="me-4">
            <Link to="#" className="text-decoration-none text-black">
              apps
            </Link>
          </li>
          <li className="me-4">
            <Link to="#" className="text-decoration-none text-black">
              software
            </Link>
          </li>
        </ul>

        <div className="row">
          <div className="col-12 col-lg-6 mb-4">
            <div className="image-content work-img1 position-relative">
              <div className="work-overlay position-absolute w-100 h-100 py-5 px-3">
                <p className="text-white text-uppercase text-decoration-underline">
                  work 02
                </p>
                <p className="text-white text-capitalize fs-6 opacity-50">
                  animation
                </p>

                <ul className="work-icons d-flex list-unstyled">
                  <li className="work-icon text-decoration-underline px-1 rounded-2 me-2">
                    <i className="fa-solid fa-share-nodes"></i>
                  </li>
                  <li className="work-icon text-decoration-underline px-1 rounded-2 me-2">
                    <i className="fa-regular fa-eye"></i>
                    <span className="num">100</span>
                  </li>
                  <li className="work-icon text-decoration-underline px-1 rounded-2 me-2">
                    <i className="fa-regular fa-heart"></i>
                    <span className="num">49</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6 mb-4">
            <div className="image-content work-img2 position-relative">
              <div className="work-overlay position-absolute w-100 h-100 py-5 px-3">
                <p className="text-white text-uppercase text-decoration-underline">
                  work 02
                </p>
                <p className="text-white text-capitalize fs-6 opacity-50">
                  animation
                </p>

                <ul className="work-icons d-flex list-unstyled">
                  <li className="work-icon text-decoration-underline px-1 rounded-2 me-2">
                    <i className="fa-solid fa-share-nodes"></i>
                  </li>
                  <li className="work-icon text-decoration-underline px-1 rounded-2 me-2">
                    <i className="fa-regular fa-eye"></i>
                    <span className="num">100</span>
                  </li>
                  <li className="work-icon text-decoration-underline px-1 rounded-2 me-2">
                    <i className="fa-regular fa-heart"></i>
                    <span className="num">49</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6 mb-4">
            <div className="image-content work-img3 position-relative">
              <div className="work-overlay position-absolute w-100 h-100 py-5 px-3">
                <p className="text-white text-uppercase text-decoration-underline">
                  work 02
                </p>
                <p className="text-white text-capitalize fs-6 opacity-50">
                  animation
                </p>

                <ul className="work-icons d-flex list-unstyled">
                  <li className="work-icon text-decoration-underline px-1 rounded-2 me-2">
                    <i className="fa-solid fa-share-nodes"></i>
                  </li>
                  <li className="work-icon text-decoration-underline px-1 rounded-2 me-2">
                    <i className="fa-regular fa-eye"></i>
                    <span className="num">100</span>
                  </li>
                  <li className="work-icon text-decoration-underline px-1 rounded-2 me-2">
                    <i className="fa-regular fa-heart"></i>
                    <span className="num">49</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6 mb-4">
            <div className="image-content work-img4 position-relative">
              <div className="work-overlay position-absolute w-100 h-100 py-5 px-3">
                <p className="text-white text-uppercase text-decoration-underline">
                  work 02
                </p>
                <p className="text-white text-capitalize fs-6 opacity-50">
                  animation
                </p>

                <ul className="work-icons d-flex list-unstyled">
                  <li className="work-icon text-decoration-underline px-1 rounded-2 me-2">
                    <i className="fa-solid fa-share-nodes"></i>
                  </li>
                  <li className="work-icon text-decoration-underline px-1 rounded-2 me-2">
                    <i className="fa-regular fa-eye"></i>
                    <span className="num">100</span>
                  </li>
                  <li className="work-icon text-decoration-underline px-1 rounded-2 me-2">
                    <i className="fa-regular fa-heart"></i>
                    <span className="num">49</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            className="col-12 col-lg-6 mb-4 d-none"
            ref={(imgRef) => (imgRefs.current[0] = imgRef)}
          >
            <div className="image-content work-img5 position-relative">
              <div className="work-overlay position-absolute w-100 h-100 py-5 px-3">
                <p className="text-white text-uppercase text-decoration-underline">
                  work 02
                </p>
                <p className="text-white text-capitalize fs-6 opacity-50">
                  animation
                </p>

                <ul className="work-icons d-flex list-unstyled">
                  <li className="work-icon text-decoration-underline px-1 rounded-2 me-2">
                    <i className="fa-solid fa-share-nodes"></i>
                  </li>
                  <li className="work-icon text-decoration-underline px-1 rounded-2 me-2">
                    <i className="fa-regular fa-eye"></i>
                    <span className="num">100</span>
                  </li>
                  <li className="work-icon text-decoration-underline px-1 rounded-2 me-2">
                    <i className="fa-regular fa-heart"></i>
                    <span className="num">49</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            className="col-12 col-lg-6 mb-4 d-none"
            ref={(imgRef) => (imgRefs.current[1] = imgRef)}
          >
            <div className="image-content work-img6 position-relative">
              <div className="work-overlay position-absolute w-100 h-100 py-5 px-3">
                <p className="text-white text-uppercase text-decoration-underline">
                  work 02
                </p>
                <p className="text-white text-capitalize fs-6 opacity-50">
                  animation
                </p>

                <ul className="work-icons d-flex list-unstyled">
                  <li className="work-icon text-decoration-underline px-1 rounded-2 me-2">
                    <i className="fa-solid fa-share-nodes"></i>
                  </li>
                  <li className="work-icon text-decoration-underline px-1 rounded-2 me-2">
                    <i className="fa-regular fa-eye"></i>
                    <span className="num">100</span>
                  </li>
                  <li className="work-icon text-decoration-underline px-1 rounded-2 me-2">
                    <i className="fa-regular fa-heart"></i>
                    <span className="num">49</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <button
          ref={btnRef}
          className="show-btn text-capitalize bg-primary border-0 rounded-3 py-2 px-3 text-white mb-5 d-block"
          onClick={showMore}
        >
          show more
        </button>
      </div>
    </div>
  );
}
