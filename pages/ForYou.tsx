import SearchBar from '@/components/SearchBar';
import SideBar from '../components/SideBar';

export default function ForYou() {
return (
  <>
    <div className="relative">
      <SearchBar />
      <div className="flex h-screen">
        <div className="absolute h-screen">
          <SideBar />
        </div>

        <div className="max-w-[1070px] w-full px-[24px] flex">
          <div className="py-[40px] w-full">
            <div className="max-w-[1070px] w-full px-[24px]">
              <h1 className="text-[22px] font-bold">Selected just for you</h1>
              {/* Your other content goes here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);
}