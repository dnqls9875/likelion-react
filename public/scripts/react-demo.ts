/* -------------------------------------------------------------------------- */
/* React Programming Preview                                                  */
/* -------------------------------------------------------------------------- */
import React from "../lib/react.js";
import ReactDOM from "../lib/react-dom/client.js";
import { Greeting } from "./greeting";

// 컴포넌트 추출(Extracting Components)
import Wrapper from "../components/wrapper";

const rootElement = document.getElementById("react");
const reactDomRoot = ReactDOM.createRoot(rootElement);

const langs = Object.keys(Greeting);

function render() {
  const lang = langs[Math.floor(Math.random() * langs.length)];
  const message = Greeting[lang];

  reactDomRoot.render(React.createElement(Wrapper, { lang, message, render }));
}

render();
