import { useState } from "react";
import "./App.css";
import StringCalcInput from "./components/input/StringCalcInput";
import StringCalcOutput from "./components/output/StringCalcOutput";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="star-pattern-container px-5">
        
        <div className="relative z-10 flex flex-wrap content-center justify-center pt-10 pb-5">
          <h1 className="min-w-[100%] text-center">Vinnie's fancy</h1>
          <img src="./public/images/logo.png"></img>
        </div>
        <div className="relative z-10 lg:px-96">
          <StringCalcInput />
        </div>
        <div className="z-10">
          <StringCalcOutput />
        </div>
        <div className="logo-attribution">
          Logo generated with www.textstudio.com
        </div>
        
        <div className="star-pattern"></div>
        <div className="star-gradient-overlay"></div>
        <div className="stripe-container">
          <div className="stripe-pattern"></div>
        </div>
      </div>
    </>
  );
}

export default App;
