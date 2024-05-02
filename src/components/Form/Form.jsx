import { useState } from "react";

export const Form = ({ onSubmit }) => {
  const [text, setText] = useState("");
  const handleChange = (event) => {
    setText(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!text) {
      return "enter some text";
    }
    onSubmit(text);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={handleChange} />
      <button> Create to do </button>
    </form>
  );
};
