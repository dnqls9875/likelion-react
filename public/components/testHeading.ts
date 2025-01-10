import React from "../lib/react.js";

// h1 컴포넌트
function HeadingTag(props: { langMessage: string; helloMessage: string }) {
  return React.createElement(
    "h1",
    {
      lang: props.langMessage.toLowerCase(),
    },
    props.helloMessage
  );
}

export default HeadingTag;
