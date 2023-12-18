import {
  ArrowRightOnRectangleIcon,
  BookmarkIcon,
  Cog6ToothIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  PencilIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import SearchBar from "./SearchBar";


export default function SideBar() {
  return (
    <>
      <div className=" lg:block absolute bg-[#f7faf9] w-[200px] min-w-[200px] top-0 left-0 h-screen">
        <div className="mt-[20px] px-[16px]">
          <img src="/sLogo.png" alt="" />
        </div>
        <div className="mt-[40px]">
          <a
            className="flex items-center h-[56px] text-[#032b41] mb-[8px] cursor-pointer hover:bg-neutral-200"
            href=""
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
    </>
  );
}
