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

export default function Tech() {
  return (
    <ul>
      <li>
        <img src={logoReact} alt="" />
        <p>REACT</p>
      </li>
      <li>
        <img src={logoHtml} alt="" />
        <p>HTML</p>
      </li>
      <li>
        <img src={logoCSS} alt="" />
        <p>CSS</p>
      </li>
      <li>
        <img src={logosass} alt="" />
        <p>SASS</p>
      </li>
      <li>
        <img style={{ marginLeft: ".4rem" }} src={logoJavascript} alt="" />
        <p>JAVASCRIPT</p>
      </li>
      <li>
        <img src={logoapi} alt="" />
        <p>API</p>
      </li>
      <li>
        <img src={logofirebase} alt="" />
        <p>FIREBASE</p>
      </li>
      <li>
        <img src={logovscode} alt="" />
        <p>VS CODE</p>
      </li>
      <li>
        <img src={logogit} alt="" style={{ marginLeft: ".8rem" }} />
        <p>GIT</p>
      </li>
      <li>
        <img src={logocypress} alt="" />
        <p>CYPRESS</p>
      </li>
      <li>
        <img src={logoexpress} alt="" />
        <p>EXPRESS</p>
      </li>
      <li>
        <img src={logomongodb} alt="" />
        <p>MONGODB</p>
      </li>
      <li>
        <img src={logonodejs} alt="" />
        <p>NODE JS</p>
      </li>
      <li>
        <img src={logofigma} alt="" />
        <p>FIGMA</p>
      </li>
      <li>
        <img src={logotailwind} alt="" />
        <p>TAILWIND</p>
      </li>
    </ul>
  );
}
