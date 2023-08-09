import React from "react";

const Overlay: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="absolute inset-0 bg-black/60 z-50">
      <div className="relative h-full">
        <button className="p-2 absolute right-2 top-2">
          <svg className="w-[18px] h-[18px] text-white">
            <use href="#close"></use>
          </svg>
        </button>
        <div className="w-3/4 mx-auto h-full flex items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Overlay;
