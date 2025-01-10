import React from "../lib/react.js";

function Heading(props: { langMessage: string; grettingMessage: string }) {
  return React.createElement(
    "h1",
    {
      lang: props.langMessage.toLowerCase(),
    },
    props.grettingMessage
  );
}

export default Heading;
