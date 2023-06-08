import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onCLick = () => setCounter((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run all the time");
  useEffect(() => {
    console.log("I ren only once.");
  }, []);
  useEffect(() => {
    console.log("I run when 'keyword' changes.");
  },[keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  },[counter]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here"
      />
      <h1>{counter}</h1>
      <button onClick={onCLick}>Click me</button>
    </div>
  );
}

export default App;
