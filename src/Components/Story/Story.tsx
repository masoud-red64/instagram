import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

type StoryPropsTypes = {
  img: string;
  hasNewStory?: boolean;
  hasStory: boolean;
};

const Story = ({ img, hasStory, hasNewStory }: StoryPropsTypes) => {
  const [isShowLoading, setIsShowLoading] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (canvas && context) {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = 47.8;

      context.clearRect(0, 0, canvas.width, canvas.height);

      const gradient = context.createLinearGradient(
        centerX - radius,
        centerY + radius,
        centerX + radius,
        centerY - radius
      );

      if (hasNewStory) {
        gradient.addColorStop(0, "rgb(255, 182, 10)");
        gradient.addColorStop(1, "rgb(254, 1, 200)");
      } else {
        gradient.addColorStop(0, "rgb(209, 212, 219)");
        gradient.addColorStop(1, "rgb(209, 212, 219)");
      }

      context.strokeStyle = gradient;
      context.lineWidth = 5;
      context.lineCap = "round";

      context.beginPath();
      context.arc(centerX, centerY, radius, 0, Math.PI * 2);
      context.stroke();

      if (isShowLoading) {
        let dashArray = 0;
        let dashOffset = 0;
        let increasing = true;
        let rotationAngle = 0;

        const animationInterval = setInterval(() => {
          context.clearRect(0, 0, canvas.width, canvas.height);

          context.strokeStyle = gradient;
          context.lineWidth = 5;
          context.lineCap = "round";

          context.translate(centerX, centerY);
          context.rotate((rotationAngle * Math.PI) / 250);
          context.translate(-centerX, -centerY);
          rotationAngle += 1;

          context.beginPath();
          context.arc(centerX, centerY, radius, 0, Math.PI * 2);
          context.stroke();

          context.setLineDash([dashArray, 20 - dashArray]);
          dashArray = dashArray + 1;

          if (increasing) {
            dashOffset -= 1;
            if (dashOffset <= 0) {
              increasing = false;
            }
          } else {
            dashOffset += 1;
            if (dashOffset >= 20) {
              increasing = true;
            }
          }

          if (dashArray >= 15) {
            clearInterval(animationInterval);
            context.setLineDash([]); // Remove dashes and spaces
          }
        }, 100);

        setTimeout(() => {
          setIsShowLoading(false); // Stop the loading animation
          navigate("/");
        }, 5500); // Total animation duration
      }
    }
  }, [isShowLoading, hasNewStory, navigate]);

  return (
    <a
      href="#"
      className="w-full h-full relative flex items-center justify-center border rounded-full"
      onClick={(e) => {
        e.preventDefault();
        setIsShowLoading(true);
        setTimeout(() => {
          setIsShowLoading(false); // Stop the loading animation
          navigate("/");
        }, 7000); // Total animation duration
      }}
    >
      {hasStory && (
        <canvas
          ref={canvasRef}
          className={`absolute w-full rounded-full ${
            isShowLoading ? "animate-loading-story" : ""
          }`}
          width={100}
          height={100}
        />
      )}
      <img
        className="w-[95%] rounded-full"
        src={`images/users/${img}`}
        alt=""
      />
    </a>
  );
};

export default Story;
