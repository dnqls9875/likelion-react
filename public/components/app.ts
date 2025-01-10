import React from "../lib/react.js";
import Box from "./box";

// const { createElement: h, Fragment } = React;

function App() {
  return React.createElement(
    "div",
    { className: "app" },
    React.createElement(
      Box,
      {
        className: "box--circle",
        id: "i m-box",
        "aria-lable": "나는 박스다",
        title: "나는 박스다",
        translate: "no",
      },
      "작은박스"
    ),
    React.createElement(
      Box,
      {
        size: "small",
        style: {
          backgroundColor: "#0388d1",
        },
      },
      "박스"
    ),
    React.createElement(
      Box,
      {
        size: "big",
        style: {
          backgroundColor: "#1ecff6",
          borderRadius: 20,
        },
      },
      "큰박스"
    )
  );
}

export default App;
