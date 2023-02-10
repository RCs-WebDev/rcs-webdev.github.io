import React from "react";
import Particle from "../Particle";
import laptopImg from "../../Assets/about.png";
import "./style.css";

function About() {
  return (
    <div fluid className="about-section">
      <Particle />
      <div>
        <div style={{ justifyContent: "center", padding: "10px" }}>
          <div
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Want to Know Who <strong className="purple">I AM !</strong>
            </h1>
          </div>
          <div
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </div>
        </div>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>


        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>

      </div>
    </div>
  );
}

export default About;
