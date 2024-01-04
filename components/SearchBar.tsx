import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import React, { Dispatch, FC, SetStateAction } from "react";

interface SearchBarProps {
  onButtonClick: () => void;
}

const SearchBar: FC<SearchBarProps> = ({ onButtonClick }) => {
  
  return (
    <>
      <div className="border-b-2 border-[#e1e7ea] h-[80px] flex">
        <div className="flex items-center justify-items-end max-w-[900px] ml-auto mx-[68px] px-[32px]">
          <div className="flex space-x-10">
            <div className="flex relative w-full max-w-[500px] ">
              <input
                className="bg-[#f1f6f4] focus:outline-none border-2 rounded-sm pr-[16px] h-[40px]"
                type="text"
                placeholder="Search for books"
              />
              <div className=" flex absolute items-center h-full justify-end border-l-2 pl-[8px] right-[8px]">
                <MagnifyingGlassIcon className="w-[24px] h-[24px]" />
                {/* <XMarkIcon className="w-[24px] h-[24px]" /> */}
              </div>
            </div>
            <div className="items-center justify-center flex cursor-pointer sm:hidden">
              <Bars3Icon
              onClick={onButtonClick}
              className="w-[24px] h-[24px]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchBar;