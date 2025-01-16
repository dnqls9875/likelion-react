import React from "../lib/react.js";
import type { List } from "../types/list.ts";
import Switch from "./switch.tsx";

interface SwitchListProps {
  items: List;
}

const switchStyles = {
  display: "flex",
  flexFlow: "column",
  gap: 12,
  listStyle: "none",
  paddingInlineStart: 0,
};

// 리스트 렌더링 02
// Array.prototype.map (O) : 새로운 배열 반환 (반환값이 있으므로 리엑트에서 적절하다.)
// Array.prototype.forEach (X) : undefined (반환값이 없으므로 리엑트에서 사용하지 않는다.)

function SwitchList({ items }: SwitchListProps) {
  // React 컴포넌트 상태 관리
  // React Hooks API (React.useState)
  // 어떤 상태? (과제 제출)

  const [submission, setSubmission] = React.useState(false);

  function switchSubmission() {
    const switchSubmission = !submission;
  }

  return (
    <ul className="SwitchList" style={switchStyles}>
      <li>
        <Switch
          active={submission}
          onToggle={() => {
            const switchSubmission = !submission;
            setSubmission(switchSubmission);
          }}
        >
          과제 제출
        </Switch>
      </li>
      {/* 조건부 디스플레이 (Conditional Display) */}
      {items.map((item) => (
        <li key={item.id} style={{ display: "none" }}>
          <Switch
            active={item.active}
            disabled={item.disabled}
            showOnOffText={item.showOnOffText}
            onToggle={item.onToggle}
          >
            {item.children}
          </Switch>
        </li>
      ))}

      {/* 조건부 렌더링 (Conditional Rendering) */}
      {false &&
        items.map((item) => (
          <li key={item.id}>
            <Switch
              active={item.active}
              disabled={item.disabled}
              showOnOffText={item.showOnOffText}
              onToggle={item.onToggle}
            >
              {item.children}
            </Switch>
          </li>
        ))}
    </ul>
  );
}

export default SwitchList;
