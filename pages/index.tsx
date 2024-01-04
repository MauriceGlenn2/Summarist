import Landing from "@/components/Landing";
import SearchBar from "@/components/SearchBar";
import SideBar from "@/components/SideBar";
import ForYou from "./ForYou";

import { FC, useState } from "react";
import Book from "./Book";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function toggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen);
  }

  console.log("isSideBaropen:", isSidebarOpen);
  return (
    <>
      <SearchBar onButtonClick={toggleSidebar} />
      <div className="flex">
        <SideBar isSidebarOpen={isSidebarOpen} />

        {/* <ForYou /> */}

        <Book />
      </div>

      {/* <Landing /> */}
    </>
  );
};
export default Home;
