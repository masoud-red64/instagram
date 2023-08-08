import React from "react";
import Story from "../Story/Story";

function TwoProfile({ img1, img2 }: { img1: string; img2: string }) {
  return (
    <div className="relative w-11 h-11">
      <div className="absolute bottom-0 right-0 w-9 h-9 border-2 border-white rounded-full z-[1]">
        <Story img={img1} hasStory={false} />
      </div>
      <div className="absolute top-0 left-0 w-8 h-8">
        <Story img={img2} hasStory={false} />
      </div>
    </div>
  );
}

export default TwoProfile;
