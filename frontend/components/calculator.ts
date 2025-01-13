import React from "../lib/react.js";

// HTML = Hyper Text Markup Language
// h = hyperscript (JavaScript Markup)
const { createElement: h } = React;

type OperatioFn = (left: number, right: number) => number;
type Operator = "+" | "-" | "*" | "/" | "**";

const operations: Record<Operator, OperatioFn> = {
  "+": (left, right) => left + right,
  "-": (left, right) => left - right,
  "*": (left, right) => left * right,
  "/": (left, right) => left / right,
  "**": (left, right) => left ** right,
};

// & 구조 분해할당 전
// function add(numbers: { a: number, b: number }): number {
//   return numbers.a + numbers.b;
// }
// add({ a: 10, b: 11 });

// & 구조 분해할당 후
// function add({ a, b }: { a: number; b: number }) {
//   return a + b;
// }
// add({ a: 11, b: 10 });

function Calculator(props: {
  elements?: [number, number];
  operator: Operator;
}) {
  const operator = props.operator ?? "+";

  let left = 0;
  let right = 0;

  if (props.elements) {
    const [l, r] = props.elements;
    left = l ?? left;
    right = r ?? right;
  }

  const outputValue: number = operations[operator](left, right);

  return h(
    "div",
    {
      className: "calculator",
    },
    h(
      "code",
      null,
      `${left} ${operator} ${right} = `,
      h("output", null, outputValue)
    )
  );
}

export default Calculator;
