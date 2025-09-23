import { useRef, useState } from "react";

const ThrottlingExample = () => {
  const [clicks, setClicks] = useState(0);
  let previous = useRef(0);
  const handleClick = () => {
    let now = Date.now();
    let throttleDelay = 2000;
    if (now - previous.current > throttleDelay) {
      setClicks((prev) => prev + 1);
      previous.current = now;
    } else {
      alert("Click after some time");
    }
  };
  return (
    <div>
      <h1>Throttling</h1>
      <button onClick={handleClick}>Click button!!!</button>
      <p>Accepted clicks - {clicks} </p>
    </div>
  );
};

export default ThrottlingExample;
