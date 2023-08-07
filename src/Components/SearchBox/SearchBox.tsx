import React from "react";
import Story from "../Story/Story";
import { RootState } from "../../store/store";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

type itemListTypes = {
  id: number;
  img: string;
  hasStory: boolean;
  hasNewStory: boolean;
  username: string;
  name: string;
};

function SearchBox() {
  //   const [fillteredItems, setFilteredItems] = useState<itemListTypes[] | null>(
  //     []
  //   );
  const [sortedItems, setSortedItems] = useState<itemListTypes[] | null>([]);

  const searchInputValueSelector = useSelector(
    (state: RootState) => state.searchInputValueReducer
  );

  const itemsList: itemListTypes[] = [
    {
      id: 1,
      img: "user1.jpg",
      hasStory: true,
      hasNewStory: true,
      username: "masoud_red64",
      name: "Masoud",
    },
    {
      id: 2,
      img: "user2.jpg",
      hasStory: false,
      hasNewStory: false,
      username: "m2.designing",
      name: "M2 D E S I G N",
    },
    {
      id: 3,
      img: "user3.jpg",
      hasStory: true,
      hasNewStory: false,
      username: "nikolausofpersia",
      name: "Nikolaus",
    },
    {
      id: 4,
      img: "user4.jpg",
      hasStory: true,
      hasNewStory: false,
      username: "bbcpersian",
      name: "BBC NEWS فارسی 19.4M",
    },
    {
      id: 5,
      img: "user5.jpg",
      hasStory: true,
      hasNewStory: true,
      username: " marzieh_d64",
      name: "Marzieh",
    },
    {
      id: 6,
      img: "user6.jpg",
      hasStory: true,
      hasNewStory: true,
      username: " arash_times",
      name: "Arash",
    },
    {
      id: 7,
      img: "user7.jpg",
      hasStory: false,
      hasNewStory: false,
      username: " ketab20.ir",
      name: " فروشگاه آنلاین کتاب ",
    },
    {
      id: 8,
      img: "user8.jpg",
      hasStory: true,
      hasNewStory: true,
      username: "mobonews",
      name: "Mobonews | موبونیوز ",
    },
  ];

  useEffect(() => {
    // const filtered = itemsList.filter(
    //   (item) =>
    //     item.name
    //       .toLowerCase()
    //       .includes(searchInputValueSelector.inputValue.toLowerCase()) ||
    //     item.username
    //       .toLowerCase()
    //       .includes(searchInputValueSelector.inputValue.toLowerCase())
    // );

    // setFilteredItems(filtered);

    // Another Feature Search
    const searchValue = searchInputValueSelector.inputValue.toLowerCase();

    // Reorder the items based on search value
    const sortedItemsList = [...itemsList].sort((a, b) => {
      const aMatch =
        a.username.toLowerCase().includes(searchValue) ||
        a.name.toLowerCase().includes(searchValue);

      const bMatch =
        b.username.toLowerCase().includes(searchValue) ||
        b.name.toLowerCase().includes(searchValue);

      if (aMatch && !bMatch) {
        return -1;
      } else if (!aMatch && bMatch) {
        return 1;
      } else {
        return 0;
      }
    });

    setSortedItems(sortedItemsList);
  }, [searchInputValueSelector]);

  return (
    <div className="h-3/4 mt-3 overflow-auto scrollbar">
      {/* Top */}
      <div className="flex justify-between items-center text-left font-[600] mt-1.5 mb-2 mx-6 pt-1">
        <span className="text-black dark:text-neutral-100">Recent</span>
        <button className="text-sm text-[#0095f6] hover:text-[#00376b] transition-colors">
          Clear all
        </button>
      </div>

      {/* Content */}
      <ul className="my-2">
        {sortedItems?.map((item) => (
          <li key={item.id} className="hover:hover-item transition-colors">
            <div className="flex items-center justify-between px-6 py-2">
              <button className="flex items-center gap-x-3">
                <div className="w-[54px] h-[54px]">
                  <Story
                    img={item.img}
                    hasStory={item.hasStory}
                    hasNewStory={item.hasNewStory}
                  />
                </div>

                <a href="#" className="block text-sm text-left">
                  <span className="text-black dark:text-neutral-100 line-clamp-1">
                    {item.username}
                  </span>
                  <span className="text-[#737373] line-clamp-1">
                    {item.name}• Following
                  </span>
                </a>
              </button>
              <button>
                <svg className="w-4 h-4 text-[#737373]">
                  <use href="#close"></use>
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchBox;
