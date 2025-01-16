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

  // [관심사] 과제 제출 상태 && 상태 업데이트 로직
  const [submission, setSubmission] = React.useState(false);
  const handleToggleSubmisson = () => {
    const switchSubmission = !submission;
    setSubmission(switchSubmission);
  };

  // [관심사] 복습 수행 상태 && 상태 업데이트 로직
  const [review, setReview] = React.useState(true);
  const handleToggleReview = () => {
    const switchReview = !review;
    setReview(switchReview);
  };

  // [관심사] 나의 수준 파악 상태 && 상태 업데이트 로직
  const [level, setLevel] = React.useState(false);
  const handleToggleLevel = () => {
    const switchLevel = !level;
    setLevel(switchLevel);
  };

  return (
    <ul className="SwitchList" style={switchStyles}>
      <li>
        <Switch active={level} onToggle={handleToggleLevel}>
          정확한 나의 수준 판단
        </Switch>
      </li>
      <li>
        <Switch active={submission} onToggle={handleToggleSubmisson}>
          과제 제출
        </Switch>
      </li>
      <li>
        <Switch active={review} onToggle={handleToggleReview}>
          의미있는 복습 수행
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
