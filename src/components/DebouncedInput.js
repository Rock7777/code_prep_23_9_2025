import { useState } from "react";

const DebouncedInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");
  const debounce = (f1, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      setTimeout(() => {
        f1(...args);
      }, delay);
    };
  };
  const handleChange = (e) => {
    const userInput = e.target.value;
    setInputValue(userInput);
    handleInput(userInput);
  };
  const handleInput = debounce((value) => {
    setDebouncedValue(value);
  }, 2000);
  const submitHandler = () => {
    alert(`${debouncedValue}`);
    setInputValue("");
  };
  return (
    <div>
      <h1>DebouncedInput</h1>
      <input type="text" value={inputValue} onChange={(e) => handleChange(e)} />
      <button onClick={submitHandler}>Submit</button>
    </div>
  );
};

export default DebouncedInput;
