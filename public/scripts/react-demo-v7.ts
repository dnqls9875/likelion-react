/* -------------------------------------------------------------------------- */
/* React Programming Preview                                                  */
/* -------------------------------------------------------------------------- */
import React from "../lib/react.js";
import ReactDOM from "../lib/react-dom/client.js";
import { Greeting } from "./greeting";

// Heading 컴포넌트
function Heading(props: { grettingMessage: string }) {
  return React.createElement("h1", {}, props.grettingMessage);
}

// changeButton 컴포넌트
function ChangeButton() {
  return React.createElement("button", { type: "button" }, "인사말");
}

// wrapper 컴포넌트
function Wrapper(props: { message: string }) {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(Heading, { grettingMessage: props.message }),
    React.createElement(ChangeButton)
  );
}

const rootElement = document.getElementById("react");
const reactDomRoot = ReactDOM.createRoot(rootElement);

// 랜덤 인사말 출력
const keys = Object.keys(Greeting);

const key = keys[Math.floor(Math.random() * keys.length)];

// React Component -> React Element Creating -> DOM 렌더링
reactDomRoot.render(React.createElement(Wrapper, { message: Greeting[key] }));
