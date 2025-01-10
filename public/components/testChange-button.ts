import React from "../lib/react.js";

// 버튼 컴포넌트
function ChangeBtn(props: { render: () => void }): React.ReactElement {
  return React.createElement(
    "button",
    {
      onClick: () => {
        props.render();
      },
      type: "button",
    },
    "인사말"
  );
}

export default ChangeBtn;
