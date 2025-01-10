/* -------------------------------------------------------------------------- */
/* React Programming Preview                                                  */
/* -------------------------------------------------------------------------- */
import React from "../lib/react.js";
import ReactDOM from "../lib/react-dom/client.js";
import { Greeting } from "./greeting";

import Wrapper from "../components/testWraper";

const rootElement = document.getElementById("react");
const reactDomRoot = ReactDOM.createRoot(rootElement);

const greetingKey = Object.keys(Greeting);

function render() {
  const lang = greetingKey[Math.floor(Math.random() * greetingKey.length)];
  const message = Greeting[lang];

  reactDomRoot.render(React.createElement(Wrapper, { message, lang, render }));
}

// 함수 초기화
render();
