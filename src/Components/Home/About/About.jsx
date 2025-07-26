import React from "react";

export default function About() {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="content px-3 px-md-5 w-100">
        <p
          className="text-uppercase text-muted small mb-1"
          style={{ letterSpacing: "2px" }}
        >
          About Me
        </p>
        <h4
          className="text-uppercase fw-bold mb-4"
          style={{ letterSpacing: "1.5px", color: "#0a246a" }}
        >
          Get to Know Me
        </h4>

        <p className="description text-secondary mb-3">
          <span className="fw-semibold">Hello, I'm Jackson Ford </span> — a
          creative front-end developer who loves building elegant and functional
          user experiences. I focus on writing clean, scalable code and
          translating design mockups into responsive web interfaces.
        </p>

        <p className="description text-secondary">
          With a strong foundation in HTML, CSS, JavaScript, and React, I aim to
          craft digital experiences that are fast, accessible, and visually
          appealing. I enjoy collaborating with designers and backend developers
          to bring full-featured applications to life.
        </p>

        <div className="row justify-content-between mt-4">
          <div className="col-sm-10 col-md-5 col-lg-3 mb-4">
            <div className="feature border-bottom border-2 border-primary">
              <i className="fa-regular fa-lightbulb mb-4 fs-3 text-primary"></i>
              <h5 className="feature-name text-capitalize">
                Creative Thinking
              </h5>
            </div>
          </div>

          <div className="col-sm-10 col-md-5 col-lg-3 mb-4">
            <div className="feature border-bottom border-2 border-danger">
              <i className="fa-solid fa-code mb-4 fs-3 text-danger"></i>
              <h5 className="feature-name text-capitalize">Clean Coding</h5>
            </div>
          </div>

          <div className="col-sm-10 col-md-5 col-lg-3 mb-4">
            <div className="feature border-bottom border-2 border-warning">
              <i className="fa-solid fa-server mb-4 fs-3 text-warning"></i>
              <h5 className="feature-name text-capitalize">API Integration</h5>
            </div>
          </div>

          <div className="col-sm-10 col-md-5 col-lg-3 mb-4">
            <div className="feature border-bottom border-2 border-success">
              <i className="fa-solid fa-mobile-screen-button mb-4 fs-3 text-success"></i>
              <h5 className="feature-name text-capitalize">
                Responsive Design
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
