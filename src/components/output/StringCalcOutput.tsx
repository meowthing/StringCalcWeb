function StringCalcOutput(props: { getSum: number }) {
  return (
    <div className="w-full text-center text-6xl font-extrabold text-yellow-400 drop-shadow-[3px_3px_1px_black]">
      <span id="resultString" data-test="calc-output">
        The total is {props.getSum}!
      </span>
    </div>
  );
}

export default StringCalcOutput;
