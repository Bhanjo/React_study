import { useState } from "react";

const MultiInputEvent = () => {
  const [form, setForm] = useState({
    username: "",
    message: "",
  });
  const {username, message} = form;

  const onChange = (e) => {
    const nextForm = {
      ...form, // 기존 form 복사
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };

  const onClick = () => {
    alert(`${username}: ${message}`);
    setForm({
      username: "",
      message: "",
    });
  };

  return (
    <>
      <h1>여러 인풋 다루기</h1>
      <input
        type="text"
        placeholder="username"
        name="username"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="message"
        name="message"
        value={message}
        onChange={onChange}
      />
      <button onClick={onClick}>확인</button>
    </>
  );
};
export default MultiInputEvent;
