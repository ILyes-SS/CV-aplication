import { useState } from "react";

export function Field({ type, label, setText }) {
  const [text, setText] = useState("");

  function inputChangeHandler(e) {
    setText(e.target.value);
  }
  return (
    <div className="field">
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        id={label}
        value={text}
        onChange={inputChangeHandler}
      />
    </div>
  );
}
