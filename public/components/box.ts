import React from "../lib/react.js";

// props를 children로 지정하고 타입을 React.ReactNode로 지정하면
// 컴포넌트에서 사용될 children를 모두 사용할 수 있다.

// props {children}

interface BoxProps {
  // 필수 (required)
  children: React.ReactNode;
  // 선택 (optional)
  size?: "small" | "big";
  className?: string;
  style?: Record<string, string | number>;
}

function Box({
  children,
  size,
  className = "",
  style,
  ...restProps
}: BoxProps) {
  console.log(restProps);

  let sizeClassName = "";

  if (size) {
    sizeClassName = `box--${size}`;
  }

  const classNames = `box ${sizeClassName} ${className}`.trim();

  return React.createElement(
    "div",
    {
      className: classNames,
      style: {
        backgroundColor: "#171c28",
        color: "#fff",
        ...style,
      },
    },
    children
  );
}

// ! 리팩토링 전 코드
// function Box(props: { children: React.ReactNode }) {
//   return React.createElement(
//     "div",
//     {
//       className: "box",
//       style: {
//         backgroundColor: "#171c28",
//         color: "#fff",
//       },
//     },
//     props.children
//   );
// }

export default Box;
