function StringCalcOutput() {
  return (
    <div className="w-full text-center text-6xl font-extrabold text-yellow-400 drop-shadow-[3px_3px_1px_black]">
      <span id="resultString">The total is {Math.round(Math.random() * 100)}!</span>
    </div>
  );
}

export default StringCalcOutput;
