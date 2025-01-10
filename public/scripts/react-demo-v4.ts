/* -------------------------------------------------------------------------- */
/* React Programming Preview                                                  */
/* -------------------------------------------------------------------------- */
import React from "../lib/react.js";
import ReactDOM from "../lib/react-dom/client.js";

// 리액트 엘리먼트
let heading = React.createElement("h1", {}, "안녕!");

// ! 리액트 컴포넌트 (이름 작성 규칙 : PascalCase)
function HeadingOne() {
  // 리액트 엘리먼트 (생성 후 ) 반환
  return React.createElement("h1", { children: "안녕!" });
}

for (let i = 0; i < 5; ++i) {
  // 컴포넌트를 사용해 React 엘리먼트를 재사용할 수 있음!
  console.log(React.createElement(HeadingOne));
}

const changeButton = React.createElement(
  "button",
  { type: "button" },
  "인사말"
);

const wrapper = React.createElement(
  React.Fragment,
  null,
  heading,
  changeButton
);

const rootElement = document.getElementById("react");
const reactDomRoot = ReactDOM.createRoot(rootElement);

reactDomRoot.render(wrapper);
