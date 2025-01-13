// --------------------------------------------------------------------------
// ✅ Switch 컴포넌트 작성(실습)
// --------------------------------------------------------------------------
// - [x] switch 역할(role) 설정
// - [x] aria-checked 속성을 사용해 ON/OFF 상태 설정
// - [ ] ON/OFF 텍스트를 화면에 표시하더라도 aria-hidden 속성을 사용해 읽지 않도록 설정
// - [ ] 사용자가 Space, Enter(옵션) 키를 눌렀을 때 작동되도록 설정
// - [ ] 비활성 상태인 경우, aria-disabled 속성을 사용해 설정
// --------------------------------------------------------------------------

import React from "../lib/react.js";

const h = React.createElement;

interface SwitchProps {
  active?: boolean;
  disabled?: boolean;
  showOnOffText?: boolean;
  children: React.ReactNode;
  onToggle?: () => void;
}

type SwitchText = "ON" | "OFF" | null;

function Switch({
  active = false,
  disabled = false,
  showOnOffText = false,
  children,
  onToggle,
}: SwitchProps) {
  let switchText: SwitchText = !showOnOffText ? null : active ? "ON" : "OFF";

  let switchTextNode = null;

  if (switchText) {
    switchTextNode = h(
      "span",
      { className: "Switch--text", "aria-hidden": true },
      switchText
    );
  }

  const handleToggle = () => {
    if (disabled) return;
    onToggle?.();
  };

  const handleKeyControl = (e: any) => {
    const key = e.code;
    const shiftKey = !!e.shiftKey;

    if (!disabled && !shiftKey && (key === "Space" || key === "Enter")) {
      onToggle?.();
    }
  };

  return h(
    "div",
    {
      role: "switch",
      "aria-checked": active,
      "aria-disabled": disabled,
      tabIndex: 0,
      className: "Switch",
      onClick: handleToggle,
      onKeyDown: handleKeyControl,
    },
    h("span", { className: "Switch--label" }, children),
    h(
      "span",
      { className: "Switch--info" },
      h("span", { className: "Switch--knob" }),
      switchTextNode
    )
  );
}

export default Switch;
