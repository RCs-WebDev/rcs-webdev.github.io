import React from "react";
import homeLogo from "../../Assets/RCIcon.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import "./style.css";


function Home() {
  return (
    <section>
      <div fluid className="home-section" id="home">
        <Particle />
        <div className="home-content">
          <div>
            <div md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                Welcome to 
                <strong className="main-name"> RC's WebDev</strong>,
              </h1>
            </div>

            <div md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </div>
          </div>
        </div>
      </div>
      <Home2 />
    </section>
  );
}

export default Home;
