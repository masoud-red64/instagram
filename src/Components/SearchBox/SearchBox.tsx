import React from "react";
import Story from "../Story/Story";
import { RootState } from "../../store/store";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { userListTypes, usersList } from "../../Data/users";

function SearchBox({ className }: { className: string }) {
  const [fillteredItems, setFilteredItems] = useState<userListTypes[] | null>(
    []
  );

  const searchInputValueSelector = useSelector(
    (state: RootState) => state.searchInputValueReducer
  );

  useEffect(() => {
    const filtered = usersList.filter((item) => {
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
    <div className={`${className} pt-3 scrollbar`}>
      {/* Top */}
      {!searchInputValueSelector.inputValue.length && (
        <div className="flex justify-between items-center text-left font-[600] mt-1.5 mb-2 mx-6 pt-1">
          <span className="text-black dark:text-neutral-100">Recent</span>
          <button
            className="text-sm text-[#0095f6] hover:text-[#00376b] dark:hover:text-neutral-100 transition-colors"
            onClick={clearAllItems}
          >
            Clear all
          </button>
        </div>
      )}

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
                  <span className="text-black dark:text-neutral-100 line-clamp-1 break-words w-28">
                    {item.username}
                  </span>
                  <span className="text-[#737373] line-clamp-1">
                    {item.name}• Following
                  </span>
                </a>
              </button>
              {!searchInputValueSelector.inputValue.length && (
                <button onClick={() => removeItem(item.id)}>
                  <svg className="w-4 h-4 text-[#737373]">
                    <use href="#close"></use>
                  </svg>
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchBox;
