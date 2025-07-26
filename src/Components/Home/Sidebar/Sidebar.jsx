import React from "react";
import { NavLink } from "react-router-dom";
import about from "../../../assets/about-BgAkqdr2.jpg";

export default function Sidebar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light flex-column shadow-sm">
      <button
        className="navbar-toggler mb-3"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#sidebarMenu"
        aria-controls="sidebarMenu"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse flex-column text-uppercase"
        id="sidebarMenu"
      >
        <img src={about} alt="profile" className="portfolio-img mb-4" />

        <h4 className="text-capitalize fw-bold">Jackson Ford</h4>
        <p className="text-uppercase title text-secondary mb-4 small text-center">
          UI/UX Designer Philippines
        </p>

        <ul className="nav flex-column w-100 text-start">
          {[
            { to: "/home", label: "Home" },
            { to: "/about", label: "About" },
            { to: "/skills", label: "Skills" },
            { to: "/exp", label: "Experience" },
            { to: "/work", label: "Work" },
          ].map((link, i) => (
            <li className="nav-item" key={i}>
              <NavLink
                to={link.to}
                end
                className={({ isActive }) =>
                  `nav-link py-2 px-3 d-block rounded-start border-0 ${
                    isActive ? "fw-bold bg-dark text-white" : "text-secondary"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
