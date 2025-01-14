import React from "../lib/react.js";

export default function Playground() {
  const [count, setCount] = React.useState(0);

  return (
    <div className="Playground">
      <h1>플레이그라운드</h1>
      <h2>{count}</h2>
      <button
        type="button"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </div>
  );
}
