import React from "../lib/react.js";
import Heading from "./testHeading";
import ChangeBtn from "./testChange-button";

function Wrapper(props: { lang: string; message: string; render: () => void }) {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(Heading, {
      langMessage: props.lang,
      helloMessage: props.message,
    }),
    React.createElement(ChangeBtn, { render: props.render })
  );
}

export default Wrapper;
