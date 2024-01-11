import SearchBar from "@/components/SearchBar";
import SideBar from "@/components/SideBar";
import { BookmarkIcon } from "@heroicons/react/20/solid";
import { BookOpenIcon, BookmarkSlashIcon, BookmarkSquareIcon, ClockIcon, LightBulbIcon, MicrophoneIcon, StarIcon } from "@heroicons/react/24/outline";
import React, { FC } from "react";

interface BookProps {}

const Book: FC<BookProps> = () =>{
return (
  <div className="flex flex-col w-full m-auto px-6">
    <div className="py-[40px] w-full">
      <div className="lg:flex lg:flex-row-reverse lg:gap-4 ">
        <div className="">
          <img className="pb-[20px]" src="/placeholderbook.png" alt="" />
        </div>
        <div>
          <h1 className="text-[24px] font-semibold">The Lean Startup</h1>
          <p className="py-2 text-sm font-semibold">Eric Ries</p>
          <p className="text-lg font-light text-[#032b41]">
            Time-tested advice for the digital age
          </p>
          <div className="text-[#032b41] border-b-2 py-2"></div>
          <div className="flex gap-2 py-3 space-x-5 max-w-[400px] flex-wrap">
            <div className="flex items-center justify-center">
              <StarIcon className="w-[18px] h-[18px]" />
              <p className="font-thin ml-1 text-sm">4.4(680 ratings)</p>
            </div>
            <div className="flex items-center justify-center">
              <ClockIcon className="w-[18px] h-[18px]" />
              <p className="font-thin ml-1 text-sm">03:24</p>
            </div>
          </div>
          <div className="flex gap-2 space-x-5 flex-wrap">
            <div className="flex items-center justify-center">
              <MicrophoneIcon className="w-[18px] h-[18px]" />
              <p className="font-thin ml-1 text-sm">4.4(680 ratings)</p>
            </div>
            <div className="flex items-center justify-center">
              <LightBulbIcon className="w-[18px] h-[18px]" />
              <p className="font-thin ml-1 text-sm">4.5</p>
            </div>
          </div>
          <div className="text-[#032b41] border-b-2 py-2"></div>

          <div className="flex gap-4 py-6 flex-wrap">
            <button className="flex items-center justify-center py-2 px-8 rounded-md  bg-cyan-950 text-white">
              <div className="flex items-center justify-center">
                <BookOpenIcon className="w-[18px] h-[18px]" />
                <p className="pl-1">Read</p>
              </div>
            </button>
            <button className="flex items-center justify-center py-2 px-8 rounded-md  bg-cyan-950 text-white">
              <MicrophoneIcon className="w-[18px] h-[18px]" />
              <p className="pl-1">Listen</p>
            </button>
          </div>
          <div className="text-[#0365f2] flex items-center space-x-2 mb-10">
            <BookmarkIcon className="w-[18px] h-[18px] " />
            <p>Add title to My Libaray</p>
          </div>
          <h1 className="mb-3">What's it about?</h1>
          <div className="flex py-6 flex-wrap gap-4">
            <div className="flex items-center justify-center py-2 px-8 rounded-md  bg-[#f1f6f4] text-black">
              <p className="pl-1 text-sm">Technology & the Future</p>
            </div>
            <div className="flex items-center justify-center py-2 px-8 rounded-md  bg-[#f1f6f4] text-black">
              <p className="pl-1 text-sm">Communication Skills</p>
            </div>
          </div>
          <p className="text-sm">
            "How to Win Friends and Influence People" is a self-help book
            written by Dale Carnegie and first published in 1936. The book
            provides practical advice and techniques for improving one's
            communication and social skills, with the goal of building better
            relationships and becoming more influential in both personal and
            professional settings. The book covers topics such as the importance
            of smiling, listening actively, giving honest and sincere
            appreciation, avoiding criticism, and becoming genuinely interested
            in others. It also emphasizes the power of empathy and understanding
            other people's perspectives. "How to Win Friends and Influence
            People" has been widely read and praised for its timeless and
            practical advice, and is considered a classic in the field of
            self-improvement.
          </p>
          <h1 className="my-4">About the Author</h1>
          <p className="text-sm">
            Dale Carnegie (1888-1955) was an American author, lecturer, and
            developer of self-improvement courses. He is best known for his book
            "How to Win Friends and Influence People," which has sold over 30
            million copies worldwide and is considered a classic in the
            self-help genre. Carnegie's teachings focused on improving
            interpersonal skills, communication, and leadership, and his courses
            and books were aimed at helping individuals become more confident,
            successful, and influential in both their personal and professional
            lives. He also founded the Dale Carnegie Training program, which is
            still in operation today and has helped millions of people around
            the world improve their communication and leadership skills.
          </p>
        </div>
      </div>
    </div>
  </div>
);
}

export default Book;