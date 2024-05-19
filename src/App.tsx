import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Input } from '@/components/ui/input'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="star-pattern">

        <h1>Vinnie's fancy</h1>
        <img src="./public/images/logo.png"></img>
        <Input placeholder="Enter some numbers separated by commas e.g. '2,3'"></Input>
        <div>
          <span id="resultString">The total is 15!</span>
        </div>
      </div>
    </>
  );
}

export default App;
