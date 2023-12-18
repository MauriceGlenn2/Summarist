import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import SideBar from "./SideBar";
import { Bars3Icon } from "@heroicons/react/20/solid";

export default function SearchBar() {
  return (
    <>
      {/* <SideBar /> */}
      <div className="border-b-2 border-[#e1e7ea] h-[80px] flex justify-items-end ">
        <div className="flex items-center justify-items-end max-w-[1070px] m-auto mx-[68px] px-[32px]">
          <div className="flex space-x-10">
            <div className="flex relative w-full max-w-[500px]">
              <input
                className="bg-[#f1f6f4] border-2 rounded-sm px-[16px] h-[40px] "
                type="text"
                placeholder="Search for books"
              />
              <div className="flex absolute items-center h-full justify-end border-l-2 pl-[8px] right-[8px]">
                <MagnifyingGlassIcon className="w-[24px] h-[24px]" />
              </div>
            </div>
            <div className="items-center justify-center flex cursor-pointer">
              <Bars3Icon className="w-[24px] h-[24px]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}