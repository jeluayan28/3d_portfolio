import { memo } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <MemoizedBallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

const MemoizedBallCanvas = memo(BallCanvas);

export default SectionWrapper(Tech, "");
