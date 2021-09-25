import { useState } from "react";

const InputChangeEvent = () => {
  const [value, setValue] = useState("");
  const changeEvent = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <h1>input 이벤트</h1>
      <input
        type="text"
        placeholder="input here"
        onChange={changeEvent}
        value={value}
      />
    </>
  );
};

export default InputChangeEvent;
