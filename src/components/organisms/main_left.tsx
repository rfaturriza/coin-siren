import { MainRow } from "../molecules/main_row";
import { MainText } from "../molecules/main_text";

export const HeaderLeft = () => (
  <div className="flex flex-col items-start justify-center gap-16">
    <MainText />
    <div className="hidden md:block">
      <MainRow />
    </div>
  </div>
);
