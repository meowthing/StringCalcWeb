import { useState } from "react";
import "./App.css";
import StringCalcInput from "./components/input/StringCalcInput";
import StringCalcOutput from "./components/output/StringCalcOutput";

function App() {
  const [sum, setSum] = useState(0);

  return (
    <>
      <div className="star-pattern-container px-5">
        <div className="relative z-10 grid-parent">
          <div className="grid-input">
            <div className="relative flex flex-wrap content-center justify-center pt-10 pb-5 gap-3">
              <h1 className="w-[100%] text-center italic text-2xl text-yellow-400 drop-shadow-[2px_3px_1px_black]">Vinnie's fancy</h1>
              <img src="/images/logo.png"></img>
              <h2 className="w-full text-center drop-shadow-[2px_3px_0px_rgba(255,255,255,0.5)]">Enter some numbers separated by commas e.g. '2,3' and click Calculate to get the sum of those numbers!</h2>
              <div className="italic text-xs opacity-80 drop-shadow-[2px_3px_0px_rgba(255,255,255,0.5)]">Note: does not accept numbers as words.</div>
            </div>
            <div className="relative md:px-[20%]">
              <StringCalcInput setSum={setSum} />
            </div>
          </div>
          <div className="grid-output self-start pt-20">
            <StringCalcOutput getSum={sum} />

            <div className="logo-attribution">
              ©2024 Vincent Leung
              <br />
              Background by Hyperplexed
              <br />
              Logo generated with www.textstudio.com
            </div>
          </div>
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
