import React from "../lib/react.js";

function ChangeButton(props: { render: () => void }): React.ReactElement {
  return React.createElement(
    "button",
    {
      type: "button",
      onClick: () => {
        props.render();
      },
    },
    "인사말"
  );
}

export default ChangeButton;
