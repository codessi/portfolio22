import React from "react";
import logoReact from "./../assets/tech stack/react.svg";
import logoHtml from "./../assets/tech stack/html.svg";
import logoCSS from "./../assets/tech stack/css.svg";
import logosass from "./../assets/tech stack/sass.svg";
import logoJavascript from "./../assets/tech stack/javascript.svg";
import logoapi from "./../assets/tech stack/api.svg";
import logofirebase from "./../assets/tech stack/firebase.svg";
import logogit from "./../assets/tech stack/git.svg";
import logovscode from "./../assets/tech stack/vscode.svg";
import logocypress from "./../assets/tech stack/cypress.svg";
import logoexpress from "./../assets/tech stack/express.svg";
import logomongodb from "./../assets/tech stack/mongodb.svg";
import logonodejs from "./../assets/tech stack/node-js.svg";
import logofigma from "./../assets/tech stack/figma.svg";
import logotailwind from "./../assets/tech stack/tailwind.svg";
import { useInView } from "react-intersection-observer";

export default function Tech() {

  const { ref: logoRef0, inView: logoVisible0 } = useInView({
    triggerOnce: true,
  });
  const { ref: logoRef1, inView: logoVisible1 } = useInView({
    triggerOnce: true,
  });
  const { ref: logoRef2, inView: logoVisible2 } = useInView({
    triggerOnce: true,
  });
  const { ref: logoRef3, inView: logoVisible3 } = useInView({
    triggerOnce: true,
  });
  const { ref: logoRef4, inView: logoVisible4 } = useInView({
    triggerOnce: true,
  });
  const { ref: logoRef5, inView: logoVisible5 } = useInView({
    triggerOnce: true,
  });
  const { ref: logoRef6, inView: logoVisible6 } = useInView({
    triggerOnce: true,
  });
  const { ref: logoRef7, inView: logoVisible7 } = useInView({
    triggerOnce: true,
  });
  const { ref: logoRef8, inView: logoVisible8 } = useInView({
    triggerOnce: true,
  });
  const { ref: logoRef9, inView: logoVisible9 } = useInView({
    triggerOnce: true,
  });
  const { ref: logoRef10, inView: logoVisible10 } = useInView({
    triggerOnce: true,
  });
  const { ref: logoRef11, inView: logoVisible11 } = useInView({
    triggerOnce: true,
  });
  const { ref: logoRef12, inView: logoVisible12 } = useInView({
    triggerOnce: true,
  });
  const { ref: logoRef13, inView: logoVisible13 } = useInView({
    triggerOnce: true,
  });
  const { ref: logoRef14, inView: logoVisible14 } = useInView({
    triggerOnce: true,
  });


  return (
    <ul className="tech">
      <li ref={logoRef0} className={`hidden  ${logoVisible0 ? "show" : ""}`}>
        <img src={logoReact} alt="" />
        <p>REACT</p>
      </li>
      <li ref={logoRef1} className={`hidden  ${logoVisible1 ? "show" : ""}`}>
        <img src={logoHtml} alt="" />
        <p>HTML</p>
      </li>
      <li ref={logoRef2} className={`hidden  ${logoVisible2 ? "show" : ""}`}>
        <img src={logoCSS} alt="" />
        <p>CSS</p>
      </li>
      <li ref={logoRef3} className={`hidden  ${logoVisible3 ? "show" : ""}`}>
        <img src={logosass} alt="" />
        <p>SASS</p>
      </li>
      <li ref={logoRef4} className={`hidden  ${logoVisible4 ? "show" : ""}`}>
        <img style={{ marginLeft: ".4rem" }} src={logoJavascript} alt="" />
        <p>JAVASCRIPT</p>
      </li>
      <li ref={logoRef5} className={`hidden  ${logoVisible5 ? "show" : ""}`}>
        <img src={logoapi} alt="" />
        <p>API</p>
      </li>
      <li ref={logoRef6} className={`hidden  ${logoVisible6 ? "show" : ""}`}>
        <img src={logofirebase} alt="" />
        <p>FIREBASE</p>
      </li>
      <li ref={logoRef7} className={`hidden  ${logoVisible7 ? "show" : ""}`}>
        <img src={logovscode} alt="" />
        <p>VS CODE</p>
      </li>
      <li ref={logoRef8} className={`hidden  ${logoVisible8 ? "show" : ""}`}>
        <img src={logogit} alt="" style={{ marginLeft: ".8rem" }} />
        <p>GIT</p>
      </li>
      <li ref={logoRef9} className={`hidden  ${logoVisible9 ? "show" : ""}`}>
        <img src={logocypress} alt="" />
        <p>CYPRESS</p>
      </li>
      <li ref={logoRef10} className={`hidden  ${logoVisible10 ? "show" : ""}`}>
        <img src={logoexpress} alt="" />
        <p>EXPRESS</p>
      </li>
      <li ref={logoRef11} className={`hidden  ${logoVisible11 ? "show" : ""}`}>
        <img src={logomongodb} alt="" />
        <p>MONGODB</p>
      </li>
      <li ref={logoRef12} className={`hidden  ${logoVisible12 ? "show" : ""}`}>
        <img src={logonodejs} alt="" />
        <p>NODE JS</p>
      </li>
      <li ref={logoRef13} className={`hidden  ${logoVisible13 ? "show" : ""}`}>
        <img src={logofigma} alt="" />
        <p>FIGMA</p>
      </li>
      <li ref={logoRef14} className={`hidden  ${logoVisible14 ? "show" : ""}`}>
        <img src={logotailwind} alt="" />
        <p>TAILWIND</p>
      </li>
    </ul>
  );
}
