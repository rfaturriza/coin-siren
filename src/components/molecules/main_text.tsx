import { Description } from "../atoms/description";
import { Subtitle } from "../atoms/subtitle";
import { Title } from "../atoms/title";
import { Tooltip } from "../atoms/tooltip";

export const MainText = () => (
  <div className="flex flex-col items-start justify-center gap-4">
    <Tooltip />
    <Title />
    <Subtitle />

    <div className="hidden md:block">
      <Description />
    </div>
  </div>
);
