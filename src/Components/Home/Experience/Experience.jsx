import React from "react";

export default function Experience() {
  return (
    <div className="d-flex justify-content-center align-items-center my-5 py-5">
      <div className="content px-3 px-md-5 w-100">
        <p
          className="text-uppercase text-muted small mb-1"
          style={{ letterSpacing: "2px" }}
        >
          Experience
        </p>
        <h4
          className="text-uppercase fw-bold mb-4"
          style={{ letterSpacing: "1.5px", color: "#0a246a" }}
        >
          Professional Journey
        </h4>

        <ul className="list-unstyled experiences-container ps-4">
          {[
            {
              title: "Frontend Engineer",
              time: "2020 - 2021",
              color: "primary",
              desc: "Developed high-performance React components and implemented interactive UI features across several projects.",
            },
            {
              title: "UI/UX Designer",
              time: "2021 - 2022",
              color: "success",
              desc: "Designed intuitive user interfaces and enhanced user experiences using Figma and Adobe XD.",
            },
            {
              title: "React Developer at TechCorp",
              time: "2022 - Present",
              color: "warning",
              desc: "Built and maintained reusable React components, optimized performance, and ensured responsive design across platforms.",
            },
          ].map((exp, i) => (
            <li key={i} className="position-relative mb-4">
              {/* دائرة الأيقونات */}
              <div
                className={`exp-icon position-absolute bg-${exp.color} text-white rounded-circle shadow`}
                style={{
                  width: "50px",
                  height: "50px",
                  top: "8px",
                  left: "-32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {/* أيقونة الشنطة في المنتصف */}
                <i
                  className="fa-solid fa-briefcase"
                  style={{
                    fontSize: "16px",
                    color: "#fff",
                  }}
                ></i>
              </div>

              {/* محتوى الخبرة */}
              <div className="exp-content bg-white p-4 rounded shadow-sm border">
                <h5 className="fw-semibold mb-2" style={{ color: "#0a246a" }}>
                  {exp.title}{" "}
                  <span className="text-muted fs-6 ms-2">{exp.time}</span>
                </h5>
                <p
                  className="mb-0 text-secondary"
                  style={{ fontSize: "0.95rem" }}
                >
                  {exp.desc}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
