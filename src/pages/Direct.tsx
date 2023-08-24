import React from "react";

function Direct() {
  return (
    <div className="flex">
      <div className="w-[397px] min-h-screen overflow-y-auto scrollbar bg-white dark:bg-black pt-2 border-r border-[#dbdbdb] dark:border-[#262626]">
        {/* Header */}
        <div className="flex items-center justify-between pt-7 pb-3 px-6">
          <div className="flex items-center gap-x-2">
            <h2 className="text-black dark:text-neutral-100 text-xl font-[700]">
              masoud_red64
            </h2>
            <button>
              <svg className="w-3 h-3 rotate-180">
                <use href="#chevron-top"></use>
              </svg>
            </button>
          </div>
          <button>
            <svg className="w-6 h-6">
              <use href="#new-message"></use>
            </svg>
          </button>
        </div>
      </div>
      <div className="grow"></div>
    </div>
  );
}

export default Direct;
