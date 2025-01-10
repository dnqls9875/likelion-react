import React from "../lib/react.js";
import ChangeButton from "./change-button";
import Heading from "./heading";

function Wrapper(props: { lang: string; message: string; render: () => void }) {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(Heading, {
      langMessage: props.lang,
      grettingMessage: props.message,
    }),
    React.createElement(ChangeButton, { render: props.render })
  );
}

export default Wrapper;