/* -------------------------------------------------------------------------- */
/* React Programming Preview                                                  */
/* -------------------------------------------------------------------------- */

import React from "../lib/react.js";
import ReactDom from "../lib/react-dom/client.js";

// ? React version
// console.log("React version =", React.version);

// & ReactDOM / client version
// console.log("ReactDOM version =", ReactDom.version);

/* -------------------------------------------------------------------------- */
/* Creating React Element Node                                                */
/* -------------------------------------------------------------------------- */

// React API
// React.createElement(type, props, ...children)

const heading = React.createElement("h1", {}, "안녕!");

const changeButton = React.createElement(
  "button",
  { type: "button" },
  "인사말"
);

console.group("React 요소 노드");
console.dir(heading);
console.dir(changeButton);
console.groupEnd();

/* -------------------------------------------------------------------------- */
/* Own CreateElement Function                                                 */
/* -------------------------------------------------------------------------- */

// children 배열로 들어간다는 소리
function createElement(type, props, ...children) {
  return {
    $$typeof: Symbol("own.element"),
    key: null,
    type,
    props: {
      ...props,
      children,
    },
  };
}

const ownElement = createElement(
  "div",
  {
    id: "own",
  },
  "hello"
);

console.group("own 요소 노드");
console.dir(ownElement);
console.groupEnd();
