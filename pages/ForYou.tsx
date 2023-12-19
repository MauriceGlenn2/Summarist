import SearchBar from "@/components/SearchBar";
import SideBar from "../components/SideBar";
import { ClockIcon, PlayCircleIcon, StarIcon } from "@heroicons/react/24/outline";

export default function ForYou() {
  return (
    <>
      <div className="relative flex">
        <div className="flex z-10 top-0 left-0">
          <SideBar />
        </div>
        <div className="flex flex-col w-full">
          <SearchBar />
          <div className="max-w-[1070px] w-full pl-[24px] sm:mx-auto flex">
            <div className="py-[40px] w-full">
              <div className="max-w-[1070px] w-full">
                <h1 className="text-[22px] font-bold mb-[16px]">
                  Selected just for you
                </h1>
                <div className="w-[90%] flex bg-[#fbefd6] mb-6">
                  <a
                    className="lg:flex flex-col lg:flex-row gap-6 w-[100%] justify-between p-[24px] text-[#032b41] text-left"
                    href=""
                  >
                    <p className="lg:w-[40%] mb-[20px]">
                      How Constant Innovation Creates Radically Successful
                      Businesses
                    </p>
                    <div className="w-[1px] bg-[#bac8ce] lg:block hidden"></div>
                    <div className="flex  w-[100%] lg:w-[60%] gap-4">
                      <img
                        src="/placeHolderBook.png"
                        className="w-[140px] h-[140px] "
                        alt=""
                      />
                      <div>
                        <h1 className="mb-2 font-bold">The Lean StartUP</h1>
                        <p className="mb-4">Eric Ries</p>
                        <div className="flex items-center gap-2">
                          <PlayCircleIcon className="w-[30px] h-[30px] cursor-pointer" />
                          <p className="font-bold text-sm">3 min 23 secs</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[1070px] w-full px-[24px]   sm:mx-auto flex">
            <div>
              <h1 className="text-[22px] font-bold mb-[16px]">
                Recommended For You
              </h1>
              <p className="mb-[20px]">We think you’ll like these</p>
              <div className="xl:flex gap-4">
                <div className="flex">
                  <a className=" hover:bg-gray-100 px-[12px] pt-8 pb-[12px]">
                    <img
                      src="/placeHolderBook.png"
                      className="w-[172px] h-[172px]"
                      alt=""
                    />
                    <p className="font-bold my-1">The Lean Start up</p>
                    <p className="my-1 text-sm">Eric Ries</p>
                    <p className="mb-1 text-sm">
                      How Constant Innovation Creates Radically Successful
                      Businesses
                    </p>
                    <div className="flex gap-2 ">
                      <div className="flex items-center justify-center">
                        <ClockIcon className="w-[18px] h-[18px]" />
                        <p className="font-thin ml-1 text-sm">03:24</p>
                      </div>
                      <div className="flex items-center justify-center">
                        <StarIcon className="w-[18px] h-[18px]" />
                        <p className="font-thin ml-1 text-sm">4.5</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="flex">
                  <a className=" hover:bg-gray-100 px-[12px] pt-8 pb-[12px]">
                    <img
                      src="/placeHolderBook.png"
                      className="w-[172px] h-[172px]"
                      alt=""
                    />

                    <p className="font-bold my-1">The Lean Start up</p>
                    <p className="my-1 text-sm">Eric Ries</p>
                    <p className="mb-1 text-sm">
                      How Constant Innovation Creates Radically Successful
                      Businesses
                    </p>
                    <div className="flex gap-2 ">
                      <div className="flex items-center justify-center">
                        <ClockIcon className="w-[18px] h-[18px]" />
                        <p className="font-thin ml-1 text-sm">03:24</p>
                      </div>
                      <div className="flex items-center justify-center">
                        <StarIcon className="w-[18px] h-[18px]" />
                        <p className="font-thin ml-1 text-sm">4.5</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="flex">
                  <a className=" hover:bg-gray-100 px-[12px] pt-8 pb-[12px]">
                    <img
                      src="/placeHolderBook.png"
                      className="w-[172px] h-[172px]"
                      alt=""
                    />
                    <p className="font-bold my-1">The Lean Start up</p>
                    <p className="my-1 text-sm">Eric Ries</p>
                    <p className="mb-1 text-sm">
                      How Constant Innovation Creates Radically Successful
                      Businesses
                    </p>
                    <div className="flex gap-2 ">
                      <div className="flex items-center justify-center">
                        <ClockIcon className="w-[18px] h-[18px]" />
                        <p className="font-thin ml-1 text-sm">03:24</p>
                      </div>
                      <div className="flex items-center justify-center">
                        <StarIcon className="w-[18px] h-[18px]" />
                        <p className="font-thin ml-1 text-sm">4.5</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="flex">
                  <a className=" hover:bg-gray-100 px-[12px] pt-8 pb-[12px]">
                    <img
                      src="/placeHolderBook.png"
                      className="w-[172px] h-[172px]"
                      alt=""
                    />
                    <p className="font-bold my-1">The Lean Start up</p>
                    <p className="my-1 text-sm">Eric Ries</p>
                    <p className="mb-1 text-sm">
                      How Constant Innovation Creates Radically Successful
                      Businesses
                    </p>
                    <div className="flex gap-2 ">
                      <div className="flex items-center justify-center">
                        <ClockIcon className="w-[18px] h-[18px]" />
                        <p className="font-thin ml-1 text-sm">03:24</p>
                      </div>
                      <div className="flex items-center justify-center">
                        <StarIcon className="w-[18px] h-[18px]" />
                        <p className="font-thin ml-1 text-sm">4.5</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="flex">
                  <a className=" hover:bg-gray-100 px-[12px] pt-8 pb-[12px]">
                    <img
                      src="/placeHolderBook.png"
                      className="w-[172px] h-[172px]"
                      alt=""
                    />
                    <p className="font-bold my-1">The Lean Start up</p>
                    <p className="my-1 text-sm">Eric Ries</p>
                    <p className="mb-1 text-sm">
                      How Constant Innovation Creates Radically Successful
                      Businesses
                    </p>
                    <div className="flex gap-2 ">
                      <div className="flex items-center justify-center">
                        <ClockIcon className="w-[18px] h-[18px]" />
                        <p className="font-thin ml-1 text-sm">03:24</p>
                      </div>
                      <div className="flex items-center justify-center">
                        <StarIcon className="w-[18px] h-[18px]" />
                        <p className="font-thin ml-1 text-sm">4.5</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[1070px] w-full px-[24px]  my-10 sm:mx-auto flex">
            <div>
              <h1 className="text-[22px] font-bold mb-[16px]">
                Suggested Books
              </h1>
              <p className="mb-[20px]">Browse these books</p>
              <div className="xl:flex gap-4">
                <div className="flex">
                  <a className=" hover:bg-gray-100 px-[12px] pt-8 pb-[12px]">
                    <img
                      src="/placeHolderBook.png"
                      className="w-[172px] h-[172px]"
                      alt=""
                    />
                    <p className="font-bold my-1">The Lean Start up</p>
                    <p className="my-1 text-sm">Eric Ries</p>
                    <p className="mb-1 text-sm">
                      How Constant Innovation Creates Radically Successful
                      Businesses
                    </p>
                    <div className="flex gap-2 ">
                      <div className="flex items-center justify-center">
                        <ClockIcon className="w-[18px] h-[18px]" />
                        <p className="font-thin ml-1 text-sm">03:24</p>
                      </div>
                      <div className="flex items-center justify-center">
                        <StarIcon className="w-[18px] h-[18px]" />
                        <p className="font-thin ml-1 text-sm">4.5</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="flex">
                  <a className=" hover:bg-gray-100 px-[12px] pt-8 pb-[12px]">
                    <img
                      src="/placeHolderBook.png"
                      className="w-[172px] h-[172px]"
                      alt=""
                    />

                    <p className="font-bold my-1">The Lean Start up</p>
                    <p className="my-1 text-sm">Eric Ries</p>
                    <p className="mb-1 text-sm">
                      How Constant Innovation Creates Radically Successful
                      Businesses
                    </p>
                    <div className="flex gap-2 ">
                      <div className="flex items-center justify-center">
                        <ClockIcon className="w-[18px] h-[18px]" />
                        <p className="font-thin ml-1 text-sm">03:24</p>
                      </div>
                      <div className="flex items-center justify-center">
                        <StarIcon className="w-[18px] h-[18px]" />
                        <p className="font-thin ml-1 text-sm">4.5</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="flex">
                  <a className=" hover:bg-gray-100 px-[12px] pt-8 pb-[12px]">
                    <img
                      src="/placeHolderBook.png"
                      className="w-[172px] h-[172px]"
                      alt=""
                    />
                    <p className="font-bold my-1">The Lean Start up</p>
                    <p className="my-1 text-sm">Eric Ries</p>
                    <p className="mb-1 text-sm">
                      How Constant Innovation Creates Radically Successful
                      Businesses
                    </p>
                    <div className="flex gap-2 ">
                      <div className="flex items-center justify-center">
                        <ClockIcon className="w-[18px] h-[18px]" />
                        <p className="font-thin ml-1 text-sm">03:24</p>
                      </div>
                      <div className="flex items-center justify-center">
                        <StarIcon className="w-[18px] h-[18px]" />
                        <p className="font-thin ml-1 text-sm">4.5</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="flex">
                  <a className=" hover:bg-gray-100 px-[12px] pt-8 pb-[12px]">
                    <img
                      src="/placeHolderBook.png"
                      className="w-[172px] h-[172px]"
                      alt=""
                    />
                    <p className="font-bold my-1">The Lean Start up</p>
                    <p className="my-1 text-sm">Eric Ries</p>
                    <p className="mb-1 text-sm">
                      How Constant Innovation Creates Radically Successful
                      Businesses
                    </p>
                    <div className="flex gap-2 ">
                      <div className="flex items-center justify-center">
                        <ClockIcon className="w-[18px] h-[18px]" />
                        <p className="font-thin ml-1 text-sm">03:24</p>
                      </div>
                      <div className="flex items-center justify-center">
                        <StarIcon className="w-[18px] h-[18px]" />
                        <p className="font-thin ml-1 text-sm">4.5</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="flex">
                  <a className=" hover:bg-gray-100 px-[12px] pt-8 pb-[12px]">
                    <img
                      src="/placeHolderBook.png"
                      className="w-[172px] h-[172px]"
                      alt=""
                    />
                    <p className="font-bold my-1">The Lean Start up</p>
                    <p className="my-1 text-sm">Eric Ries</p>
                    <p className="mb-1 text-sm">
                      How Constant Innovation Creates Radically Successful
                      Businesses
                    </p>
                    <div className="flex gap-2 ">
                      <div className="flex items-center justify-center">
                        <ClockIcon className="w-[18px] h-[18px]" />
                        <p className="font-thin ml-1 text-sm">03:24</p>
                      </div>
                      <div className="flex items-center justify-center">
                        <StarIcon className="w-[18px] h-[18px]" />
                        <p className="font-thin ml-1 text-sm">4.5</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
