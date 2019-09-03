import React from "react";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";
import { Icon } from "antd";
import "antd/dist/antd.css";
import "./App.css";

function App() {
  const { width, height } = useWindowSize();
  return (
    <div>
      <Confetti width={width} height={height} />
      <div className="Nav">
        <nav>
          <ul id="navbar">
            <li>
              <a href="#welcome-section">About</a>
            </li>
            <li>
              <a href="#projects">Work</a>
            </li>
            <li>
              <a href="#contacts">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="welcome-section" class="intro">
        <div class="picture">
          <img
            class="img img-responsive"
            src="https://data.whicdn.com/images/274112145/original.jpg"
            alt="girl"
          />
        </div>
        <h1>Hey! I'm Maica Zapanta.</h1>
        <p>
          "Programming is like a magic wand. You can make impossible things
          possible, the only thing you need to know is how to use it."
        </p>
      </div>

      <section class="section section-light">
        <h2>HERE'S WHAT I'VE DONE SO FAR</h2>
      </section>

      <div class="grid">
        <section>
          <div class="row">
            <div class="column">
              <div id="projects">
                <h3>TRIBUTE PAGE</h3>
                <a
                  id="profile-link"
                  class="nav-link"
                  target="_blank"
                  href="https://maicazapanta.github.io/projects/tribute/"
                >
                  <img
                    className="thumbnail"
                    src="http://www.pacificatrocities.org/uploads/1/2/2/9/12298219/aeta-squadron_orig.jpg"
                    alt="Aetas"
                  ></img>
                </a>
              </div>
            </div>
            <div class="column">
              <div class="project-tile">
                <h3>TECHNICAL DOCUMENTATION PAGE</h3>
                <a
                  id="profile-link"
                  class="nav-link"
                  target="_blank"
                  href="https://maicazapanta.github.io/projects/technical/"
                >
                  <img
                    className="thumbnail"
                    src="https://1.bp.blogspot.com/-URVi1XX5428/WJlMH5qiUlI/AAAAAAAACD8/bo0rCsltOWkAGL1hLPzuw7MJf0RtcWyfwCLcB/s1600/technicaldocumentation.png"
                    alt="Techninal Docu pic."
                  ></img>
                </a>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="column">
              <div class="project-tile">
                <h3>SURVEY FORM</h3>
                <a
                  id="profile-link"
                  class="nav-link"
                  target="_blank"
                  href="https://maicazapanta.github.io/projects/survey/"
                >
                  <img
                    className="thumbnail"
                    src="https://wpforms.com/wp-content/uploads/2016/10/wpforms-polls-surveys.png"
                    alt="Survey form"
                  ></img>
                </a>
              </div>
            </div>
            <div class="column">
              <div class="project-tile">
                <h3>PRODUCT LANDING PAGE</h3>
                <a
                  id="profile-link"
                  class="nav-link"
                  target="_blank"
                  href="https://maicazapanta.github.io/projects/product/"
                >
                  {" "}
                  <img
                    className="thumbnail"
                    src="https://s3.envato.com/files/233005096/preview.__large_preview.jpg"
                    alt="Product landing"
                  ></img>
                </a>
              </div>
            </div>
            <div class="column">
              <div class="project-tile">
                <h3>E-COMMERCE</h3>
                <a
                  id="profile-link"
                  class="nav-link"
                  target="_blank"
                  href="https://maicazapanta.github.io/projects/e-commerce/index.html"
                >
                  {" "}
                  <img
                    className="thumbnail"
                    src="../e-commerce.png"
                    alt="Product landing"
                  ></img>
                </a>
              </div>
            </div>
          </div>
          <div id="contacts">
            <section class="section section-dark">
              <h2>LET'S GET IN TOUCH</h2>
              <a href="https://www.facebook.com/maica.zapanta" target="_blank">
                <Icon type="facebook" theme="filled" className="icon" />
              </a>
              <a href="https://www.facebook.com/maica.zapanta" target="_blank">
                <Icon type="twitter" className="icon" />
              </a>
              <a href="https://www.facebook.com/maica.zapanta" target="_blank">
                <Icon type="instagram" theme="filled" className="icon" />
              </a>
              <a href="https://www.facebook.com/maica.zapanta" target="_blank">
                <Icon type="codepen" className="icon" />
              </a>
            </section>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
