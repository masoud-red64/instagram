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
  const [fillteredItems, setFilteredItems] = useState<itemListTypes[] | null>(
    []
  );

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
      id: 9,
      img: "user8.jpg",
      hasStory: true,
      hasNewStory: true,
      username: "mobonews",
      name: "Mobonews | موبونیوز ",
    },
    {
      id: 10,
      img: "user8.jpg",
      hasStory: true,
      hasNewStory: true,
      username: "mas.oud",
      name: "Mobonews | موبونیوز ",
    },
    {
      id: 11,
      img: "user8.jpg",
      hasStory: true,
      hasNewStory: true,
      username: "masoudr3423",
      name: "Mobonews | موبونیوز ",
    },
    {
      id: 12,
      img: "user8.jpg",
      hasStory: true,
      hasNewStory: true,
      username: "mohammad",
      name: "Mobonews | موبونیوز ",
    },
    {
      id: 13,
      img: "user8.jpg",
      hasStory: true,
      hasNewStory: true,
      username: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      name: "Mobonews | موبونیوز ",
    },
  ];

  useEffect(() => {
    const filtered = itemsList.filter((item) => {
      const searchValue = searchInputValueSelector.inputValue.toLowerCase();
      const itemValues = (item.name + item.username).toLowerCase();

      let searchIndex = 0; // Index to track the current character in the searchValue

      //Show all users when search input is empty
      if (searchValue === "") {
        return true;
      }

      // Loop through each character in the itemValues
      for (const char of itemValues) {
        if (char === searchValue[searchIndex]) {
          searchIndex++; // Move to the next character in searchValue
          if (searchIndex === searchValue.length) {
            return true; // Found consecutive letters, include the item
          }
        }
      }

      return false; // Consecutive letters not found, exclude the item
    });

    setFilteredItems(filtered);

    // Another Feature Search
    // const searchValue = searchInputValueSelector.inputValue.toLowerCase();

    // Reorder the items based on search value
    // const sortedItemsList = [...itemsList].sort((a, b) => {
    //   const aMatch =
    //     a.username.toLowerCase().includes(searchValue) ||
    //     a.name.toLowerCase().includes(searchValue);

    //   const bMatch =
    //     b.username.toLowerCase().includes(searchValue) ||
    //     b.name.toLowerCase().includes(searchValue);

    //   if (aMatch && !bMatch) {
    //     return -1;
    //   } else if (!aMatch && bMatch) {
    //     return 1;
    //   } else {
    //     return 0;
    //   }
    // });
    // setSortedItems(filtered);
  }, [searchInputValueSelector.inputValue]);

  function removeItem(itemID: number) {
    setFilteredItems(
      fillteredItems?.length
        ? fillteredItems.filter((item) => item.id !== itemID)
        : null
    );
  }

  function clearAllItems() {
    setFilteredItems([]);
  }

  return (
    <div className="h-3/4 mt-3 overflow-auto scrollbar">
      {/* Top */}
      <div className="flex justify-between items-center text-left font-[600] mt-1.5 mb-2 mx-6 pt-1">
        <span className="text-black dark:text-neutral-100">Recent</span>
        <button
          className="text-sm text-[#0095f6] hover:text-[#00376b] dark:hover:text-neutral-100 transition-colors"
          onClick={clearAllItems}
        >
          Clear all
        </button>
      </div>

      {/* Content */}
      <ul className="my-2">
        {fillteredItems?.map((item) => (
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
              <button onClick={() => removeItem(item.id)}>
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
