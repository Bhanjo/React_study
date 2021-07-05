import React, { useState } from "react";

const IterationSample = () => {
  // 함수형 컴포넌트에서 state 사용
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5); // 새로운 값 추가시 시작할 id

  //   이벤트 핸들링
  const onChange = (e) => setInputText(e.target.value);
  const onClick = () => {
    const nextNames = names.concat({
      // concat으로 새로운 배열 추가
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText(""); // input내용 초기화
  };
  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id); // 특정 id를 제외한 나머지를 반환
    setNames(nextNames); // 위 filter값을 다시 지정
  };

  // 반복되는 함수를 key값을 가져야함, 여기선 key값을 index로 지정
  const nameList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));

  return (
    <div>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>
    </div>
  );
};

export default IterationSample;
