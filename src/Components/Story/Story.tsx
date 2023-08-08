import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

type StoryPropsTypes = {
  img: string;
  hasNewStory?: boolean;
  hasStory: boolean;
};

const Story = ({ img, hasStory, hasNewStory }: StoryPropsTypes) => {
  const [isShowLoading, setIsShowLoading] = useState(false);

  const navigate = useNavigate();

  return (
    <a
      href="#"
      className="w-full h-full relative flex items-center justify-center border rounded-full"
      onClick={() => {
        setIsShowLoading(true);
        setTimeout(() => {
          setIsShowLoading(false);
          navigate("/");
        }, 4500);
      }}
    >
      <img className="w-full rounded-full" src={`images/users/${img}`} alt="" />
      {hasStory && (
        <svg
          className={`absolute ${isShowLoading && "animate-loading-story"}`}
          viewBox="0 0 100 100"
          fill="none"
          stroke={`url(#${hasNewStory ? "gradient1" : "gradient2"})`}
          strokeWidth={5}
          strokeDasharray={1}
          strokeDashoffset={0}
          strokeLinecap="round"
        >
          <defs>
            {hasNewStory ? (
              <linearGradient
                id="gradient1"
                x1="10%"
                y1="100%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stop-color="rgb(255, 182, 10)" />
                <stop offset="100%" stop-color="rgb(254, 1, 200)" />
              </linearGradient>
            ) : (
              <linearGradient
                id="gradient2"
                x1="10%"
                y1="100%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stop-color="rgb(209, 212, 219)" />
                <stop offset="100%" stop-color="rgb(209, 212, 219)" />
              </linearGradient>
            )}
          </defs>
          <circle cx={50} cy={50} r={47.8} />
        </svg>
      )}
    </a>
  );
};

export default Story;
