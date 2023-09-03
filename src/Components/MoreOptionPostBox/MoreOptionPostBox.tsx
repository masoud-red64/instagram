
type MoreOptionPostBoxPropsType = {
  setIsShowMoreOptionBox: (param: boolean) => void;
};

function MoreOptionPostBox({
  setIsShowMoreOptionBox,
}: MoreOptionPostBoxPropsType) {
  return (
    <div className=" bg-white dark:bg-neutral-800 rounded-xl">
      <ul className="text-sm child:py-1 divide-y divide-[#dbdbdb] dark:divide-[#363636]">
        <li className="h-12">
          <button className="w-full h-full font-[700] text-[#ed4956]">
            Report
          </button>
        </li>
        <li className="h-12">
          <button className="w-full h-full font-[700] text-[#ed4956]">
            Unfollow
          </button>
        </li>
        <li className="h-12">
          <button className="w-full h-full dark:text-neutral-100">Add to favorites</button>
        </li>
        <li className="h-12">
          <button className="w-full h-full dark:text-neutral-100">
            <a href="#">Go to post</a>
          </button>
        </li>
        <li className="h-12">
          <button className="w-full h-full dark:text-neutral-100">Share to...</button>
        </li>
        <li className="h-12">
          <button className="w-full h-full dark:text-neutral-100">Share to...</button>
        </li>
        <li className="h-12">
          <button className="w-full h-full dark:text-neutral-100">Embed</button>
        </li>
        <li className="h-12">
          <button
            className="w-full h-full dark:text-neutral-100"
            onClick={() => setIsShowMoreOptionBox(false)}
          >
            Cancel
          </button>
        </li>
      </ul>
    </div>
  );
}

export default MoreOptionPostBox;
