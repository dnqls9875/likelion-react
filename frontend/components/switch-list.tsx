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
};

function SwitchList({ items }: SwitchListProps) {
  // 리스트 렌더링 02
  // Array.prototype.map (O) : 새로운 배열 반환 (반환값이 있으므로 리엑트에서 적절하다.)
  // Array.prototype.forEach (X) : undefined (반환값이 없으므로 리엑트에서 사용하지 않는다.)
  return (
    <ul className="SwitchList" style={switchStyles}>
      {items.map((item, index) => (
        <li key={index}>
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
