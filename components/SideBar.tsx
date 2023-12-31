import {
  ArrowRightOnRectangleIcon,
  BookmarkIcon,
  Cog6ToothIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  PencilIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import React, { FC } from "react";

interface SideBarProps {
  isSidebarOpen: boolean;
}

const SideBar: FC<SideBarProps> = ({ isSidebarOpen }: SideBarProps) => {
   console.log("isSidebarOpen (in SideBar):", isSidebarOpen);
  return (
    <>
      <div
        className={`bg-[#f7faf9] lg:w-[200px] lg:min-w-[200px] top-0 left-0 h-screen
          transform transition-transform ease-in duration-300 absolute lg:relative z-50${
            isSidebarOpen
              ? "translate-x-0 lg:block w-[270px] "
              : "-translate-x-full hidden lg:hidden "
          }`}
      >
        <div className="mt-[20px] px-[16px]">
          <img src="/sLogo.png" alt="" />
        </div>
        <div className="mt-[40px]">
          <a
            className="flex items-center h-[56px] text-[#032b41] mb-[8px] cursor-pointer hover:bg-neutral-200"
            href="/ForYou"
          >
            <div className="w-[5px] h-full bg-[#2bd97c] mr-[16px]"></div>
            <div className="flex items-center justify-center mr-[8px]">
              <HomeIcon className="w-[24px] h-[24px]" />{" "}
            </div>
            <div className="text-base">For You</div>
          </a>
          <a
            className="flex items-center h-[56px] text-[#032b41] mb-[8px] cursor-pointer hover:bg-neutral-200"
            href=""
          >
            <div className="w-[5px] h-full bg-[#2bd97c] mr-[16px]"></div>
            <div className="flex items-center justify-center mr-[8px]">
              <BookmarkIcon className="w-[24px] h-[24px]" />{" "}
            </div>
            <div className="text-base">My Library</div>
          </a>
          <a
            className="flex items-center h-[56px] text-[#032b41] mb-[8px]   cursor-not-allowed"
            href=""
          >
            <div className="w-[5px] h-full  mr-[16px]"></div>
            <div className="flex items-center justify-center mr-[8px]">
              <PencilIcon className="w-[24px] h-[24px]" />{" "}
            </div>
            <div className="text-base">Highlights</div>
          </a>
          <a
            className="flex items-center h-[56px] text-[#032b41] mb-[8px]   cursor-not-allowed"
            href=""
          >
            <div className="w-[5px] h-full mr-[16px]"></div>
            <div className="flex items-center justify-center mr-[8px]">
              <MagnifyingGlassIcon className="w-[24px] h-[24px]" />{" "}
            </div>
            <div className="text-base">For You</div>
          </a>
        </div>
        <div className="absolute w-full bottom-0 left-0 ">
          <a
            className="flex items-center h-[56px] text-[#032b41] mb-[8px]  hover:bg-neutral-200 cursor-not-allowed"
            href=""
          >
            <div className="w-[5px] h-full mr-[16px]"></div>
            <div className="flex items-center justify-center mr-[8px]">
              <Cog6ToothIcon className="w-[24px] h-[24px]" />{" "}
            </div>
            <div className="text-base">Settings</div>
          </a>
          <a
            className="flex items-center h-[56px] text-[#032b41] mb-[8px]  hover:bg-neutral-200 cursor-not-allowed"
            href=""
          >
            <div className="w-[5px] h-full mr-[16px]"></div>
            <div className="flex items-center justify-center mr-[8px]">
              <QuestionMarkCircleIcon className="w-[24px] h-[24px]" />{" "}
            </div>
            <div className="text-base">Help & Support</div>
          </a>
          <a
            className="flex items-center h-[56px] text-[#032b41] mb-[8px] w-full hover:bg-neutral-200 cursor-not-allowed"
            href=""
          >
            <div className="w-[5px] h-full mr-[16px]"></div>
            <div className="flex items-center justify-center mr-[8px]">
              <ArrowRightOnRectangleIcon className="w-[24px] h-[24px]" />{" "}
            </div>
            <div className="text-base">Logout</div>
          </a>
        </div>
      </div>
      {/* <div className="hidden lg:block"><p>Hello there</p></div> */}
    </>
  );
}

export default SideBar;
