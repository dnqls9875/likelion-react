import React from "../lib/react.js";

/**
 * 학습 주요 주제
 *
 * - 순수 함수
 *  -React 컴포넌트는 항상 순수한 것으로 간주
 * - 사이드 이펙트 (부수 효과)
 *  - 부수 효과란?
 * - 리스트 렌더링
 *  - 대부분 for문 보다는 map 메서드 활용
 *  - key 속성 필히 필요 (정확하게, 빠르게, 효과적으로 렌더링 하기 위해)
 *  - key 속성은 형제 간에 고유해야 함
 *
 */

/* 상위(부모) 컴포넌트 -------------------------------------------------------------- */

type ListItem = {
  id: string;
  subject: string;
};

export default function Playground() {
  // 리스트 데이터
  const items: ListItem[] = [
    {
      id: "react",
      subject: "React",
    },
    {
      id: "next.js",
      subject: "Next.js",
    },
    {
      id: "typescript",
      subject: "TypeScript",
    },
    {
      id: "react router",
      subject: "React Router",
    },
  ];

  // 리스트 데이터 하위 컴포넌트에 전달
  return (
    <div className="Playground">
      <List list={items} />
    </div>
  );
}

/* 하위(자식) 컴포넌트 -------------------------------------------------------------- */

// 입력된 컴포넌트 속성(props)의 리스트 데이터 렌더링
// JSX 인라인 리스트 렌더링 (for문 또는 Array.prototype.map 활용)

interface ListProps {
  list: ListItem[];
}

function List({ list }: ListProps) {
  // 1. for문 사용
  // const listItems: React.ReactElement = [];
  // for (let index = 0; index < list.length; index++) {
  //   const item = list[index];
  //   listItems.push(<li key={index}>${item}</li>); // React.ReactElement
  // }

  // 2. Array.prototype.map 메서드 사용
  // const listItems = list.map((item, index) => {
  //   return <li key={index}>{item}</li>;
  // });

  //! const listItmes = list.map((item, index) => <li key={index}>{item}</li>);

  // 3. JSX 내부에 직접 Array.prototype.map 메서드 사용
  return (
    <ul className="List">
      {/* React.ReactElement */}
      {/* children prop */}
      {list.map((item) => (
        <ListItem key={item.id}>{item.subject}</ListItem>
      ))}
    </ul>
  );
}

interface ListItemProps {
  key?: number | string;
  children?: React.ReactNode;
}

function ListItem(props: ListItemProps) {
  return <li>{props.children}</li>;
}
