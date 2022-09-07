import React from "react";
import "./style/App.scss";
import profile from "./profile.jpg";
import Projects from "./components/Projects";
import Tech from "./components/Tech";


function App() {
// i am getting tech logos
  // i will put them as list
  // then I will put on grid
  // grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
  // ul li
  // put border on  and test
// what is my stack   mongodb
  // express react node.js
  // cypress.io shopify 
  return (
    <>
      <header>
        <div className="container">
          <h1>
            Hi, my name is <span>Johan Suh</span> <br /> I'm a React JS
            Developer
          </h1>
          <a className="btn" href="#about">
            Know more
          </a>
        </div>
      </header>

      <section className="about">
        <div id="about" className="clippath-container">
          <div className="center-container">
            <div className="section-wrapper">
              <h3>ABOUT ME</h3>
              <div className="about-container">
                <div className="image-wrapper">
                  <img src={profile} alt="profile" />
                </div>
                <div className="description">
                  <p>
                    As a React developer trained in General Assembly, I enjoy
                    computer programming as crafts like woodworking or pottery:
                    design plan & patiently improve the product, seeing it to
                    grow to something I made, something I am proud of.
                  </p>
                  <p>Here are some values I hold on to when I work.</p>
                  <p>
                    I choose to do hard things.
                    <br />
                    I strive to be incredibly patient. <br />
                    I love efficiency but not shortcut. <br />
                    I welcome new idea but approach minimalistically.
                    <br />
                    consistent slow changes are good.
                    <br />
                    I am adaptable because I enjoy learning. <br />I use habits
                    as task automations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tech">
        <h3>TECH STACK</h3>
        <div className="tech-wrapper">
          <Tech /> 
        </div>
      </section>
      <hr></hr>
      <section className="project">
        <h3>PROJECTS</h3>
        <div className="project-wrapper">
          <Projects />
        </div>
      </section>
      <section className="contact">
        <div className="content-wrapper">
          <h3>CONTACT HERE</h3>
          <a
            target="_blank"
            className="btn contact"
            href="mailto:johansuh@gmail.com"
            rel="noreferrer"
          >
            Email
          </a>
          <a
            target="_blank"
            className="btn contact"
            href="https://drive.google.com/file/d/1HrT5mn72YK1yjG9xpXzR6RjJg7gMf2j0/view?usp=sharing"
            rel="noreferrer"
          >
            Resume
          </a>
        </div>
      </section>
      <footer></footer>
    </>
  );
}

export default App;
