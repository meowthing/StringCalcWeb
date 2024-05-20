import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

function StringCalcInput(props: {
  setSum: React.Dispatch<React.SetStateAction<number>>;
}) {
  const [input, setInput] = useState("");

  function InputSubmitted(): void {
    props.setSum(CalculateFromString(input));
  }

  function CalculateFromString(input: string): number {
    input = SanitizeInput(input);
    const sum = input
      .split(",")
      .map((string) => Number(string))
      .filter(
        (contents) =>
          typeof contents === "number" && !isNaN(contents) && contents > 0
      )
      .reduce((accumulator, input) => accumulator + input, 0);

    return sum;
  }

  function HandleKeyDown(event: React.KeyboardEvent): void {
    if (event.key == "Enter") {
      InputSubmitted();
    }
  }

  function SanitizeInput(input: string): string {
    const regex = /[^0-9-,]/g;

    return input.replace(regex, ",");
  }

  return (
    <div className="flex flex-wrap gap-3">
      <Input
        className="flex-auto w-[75%]"
        placeholder="Enter some numbers separated by commas e.g. '2,3'"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={HandleKeyDown}
      ></Input>
      <Button
        type="button"
        onClick={InputSubmitted}
        className="flex-auto w-fit"
      >
        Calculate!
      </Button>
    </div>
  );
}

export default StringCalcInput;
