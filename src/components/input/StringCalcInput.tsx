import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function StringCalcInput() {
  return (
    <div className="flex flex-wrap gap-3 ">
      <Input
        className="flex-auto w-[75%]"
        placeholder="Enter some numbers separated by commas e.g. '2,3'"
      ></Input>
      <Button className="flex-auto w-fit">Calculate!</Button>
    </div>
  );
}

export default StringCalcInput;
